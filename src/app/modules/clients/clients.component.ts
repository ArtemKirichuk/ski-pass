import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ClientDeleteComponent } from 'src/app/modules/clients/client-delete/client-delete.component';
import { ClientInfoComponent } from 'src/app/modules/clients/client-info/client-info.component';
import { VisitorService } from 'src/app/services/visitor.service';
import { KeyVisitorType, PersanCardType, updateType, VisitorType } from 'src/app/types/types';
import { AddNewClientsComponent } from './add-new-clients/add-new-clients.component';
import { EditClientsComponent } from './edit-clients/edit-clients.component';
import { PaginatorComponent } from '../shared/paginator/paginator.component';
import { i18nRU } from '../shared/helper';
import { AgePipe } from '../shared/age/age.pipe';



@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit, OnDestroy {

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';

    showedVisitors: VisitorType[] = [];
    @ViewChild('paginator') paginator: PaginatorComponent<VisitorType> | undefined;

    allVisitors$ = new BehaviorSubject<VisitorType[]>([]);
    subscription = new Subscription();

    constructor(private dialog: MatDialog,
        private visitorService: VisitorService) {
    }

    ngOnInit(): void {
        this.visitorService.getVisitors().subscribe(resp => {
            this.visitorService.sendVisitorToStream(resp);
        });

        this.subscription = this.visitorService.getVisitorsListStream$().subscribe(resp => {
            this.allVisitors$.next(resp);
            if (this.paginator) {
                this.paginator.allItems = resp;
                this.paginator?.setPage(this.paginator.currentPage);
            }
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    onChangedPage(event: VisitorType[]): void {
        this.showedVisitors = event;
    }

    addNewClients(): void {
        const dialogRef = this.dialog.open(AddNewClientsComponent, { width: '500px' });
        dialogRef.afterClosed().subscribe(visitor => {
            if (visitor) {
                this.visitorService.createVisitor(visitor).subscribe(ok => {
                    if (ok) {
                        this.updateVisitors();
                    }
                });
            }
        });
    }

    updateVisitors(): void {
        this.visitorService.getVisitors().subscribe(visitorsList => {
            this.visitorService.sendVisitorToStream(visitorsList);
        });
    }

    onDeleteVisitor(visitor: VisitorType, redirectToDispaly?: boolean): void {
        const data = { data: visitor };
        const dialogRef = this.dialog.open(ClientDeleteComponent, data);
        dialogRef.afterClosed().subscribe(ok => {
            if (ok) {
                this.visitorService.deleteVisitor(visitor).subscribe(resp => {
                    if (resp) {
                        this.updateVisitors();
                    }
                    
                });
                return
            }
            if (redirectToDispaly) {
                this.onShowVisitor(visitor)
            }
        });
    }

    onEditVisitor(visitor: VisitorType, redirectToDispaly?: boolean): void {
        const dialogRef = this.dialog.open(EditClientsComponent, { data: { clients: visitor }, width: '500px' });

        dialogRef.afterClosed().subscribe((editedVisitor:VisitorType) => {
            if (editedVisitor) {
                const update: updateType<KeyVisitorType, VisitorType> = {
                    oldKey: { fio: visitor.fio },
                    newRow: editedVisitor
                };
                this.visitorService.changeVisitor(update).subscribe(ok => {
                    if (ok) {
                        this.updateVisitors();
                    }
                });
                return
            }
            if (redirectToDispaly) {
                this.onShowVisitor(visitor)
            }
        });
    }

    onShowVisitor(visitor: VisitorType): void {
        const dialogRef = this.dialog.open(ClientInfoComponent, { data: visitor, width: '500px', height: '790px' });
        dialogRef.afterClosed().subscribe(edit => {
            if (edit) {
                this.onEditVisitor(visitor, true);
            }
            else if (edit === false) {
                this.onDeleteVisitor(visitor, true);
            }
        })
    }
    getCardData(visiter:VisitorType):PersanCardType{
        return { 
            header: visiter.fio,
            title: AgePipe.prototype.transform(visiter.birthday),
            img: visiter.photo,
            deleteBtn: i18nRU.DELETE,
            editBtn: i18nRU.EDIT,
            editContext: i18nRU.APPOINT_COACH
        }
    }
}
