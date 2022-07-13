import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { AddNewClientsComponent } from 'src/app/modules/add-new-clients/add-new-clients.component';
import { EditClientsComponent } from 'src/app/modules/edit-clients/edit-clients.component';
import { VisitorService } from 'src/app/services/visitor.service';
import { KeyVisitorType, updateType, VisitorType } from 'src/app/types/types';
import { ClientDeleteComponent } from '../client-delete/client-delete.component';
import { ClientInfoComponent } from '../client-info/client-info.component';

@Component({
    selector: 'app-clients-mini',
    templateUrl: './clients-mini.component.html',
    styleUrls: ['./clients-mini.component.scss']
})
export class ClientsMiniComponent implements OnInit, OnDestroy {

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';
    ALL = 'Все';

    //visitors: VisitorType[] = [];
    visitors$: BehaviorSubject<VisitorType[]> = new BehaviorSubject<VisitorType[]>([]);
    subscription = new Subscription();

    showVisitors = true;

    arrowUpURL = '../../../assets/images/arrow-up-icon.svg';
    arrowDownURL = '../../../assets/images/arrow-down-icon.svg';
    minimizeURL = this.arrowUpURL;

    constructor(private visitorService: VisitorService,
                private dialog: MatDialog) { }

    ngOnInit(): void {
        this.visitorService.getVisitors().subscribe(resp => {
            this.visitorService.sendVisitorToStream(resp);
        });

        this.subscription = this.visitorService.getVisitorsListStream$()
            .pipe(
                map(value => value.slice(0, 10))
            )
            .subscribe(resp => {
                this.visitors$.next(resp);       
                console.log('got visitors list');    
            }); 
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    minimize(): void {
        this.showVisitors = !this.showVisitors;

        if (this.minimizeURL === this.arrowUpURL) {
            this.minimizeURL = this.arrowDownURL;
        }
        else {
            this.minimizeURL = this.arrowUpURL;
        }
    }

    addNewClients(): void {
        const dialogRef = this.dialog.open(AddNewClientsComponent, {width:'35%'});
        dialogRef.afterClosed().subscribe(visitor => {
            if (visitor) {
                this.visitorService.createVisitor(visitor).subscribe(ok => {
                    if (ok) {
                        this.updateVisitors();
                    }
                    else {
                        alert('Ошибка добавления пользователя');
                    }
                });
            }
        });
    }


    updateVisitors(): void{
        this.visitorService.getVisitors().subscribe(visitorsList => {
            this.visitorService.sendVisitorToStream(visitorsList);
        });
    }

    onDeleteVisitor(visitor: VisitorType): void {
        const data = { data: visitor };
        const dialogRef = this.dialog.open(ClientDeleteComponent, data);
        dialogRef.afterClosed().subscribe(resp => {
            if(resp) {
                this.visitorService.deleteVisitor(visitor).subscribe(resp => {
                    if (resp) {
                        this.updateVisitors();
                    }
                });
            }
        });
    }

    onEditVisitor(visitor: VisitorType): void {
        const dialogRef = this.dialog.open(EditClientsComponent, {data : {clients : visitor}, width:'35%'});
        dialogRef.afterClosed().subscribe(editedVisitor => {
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
            }
        });
    }

    onShowVisitor(visitor: VisitorType): void {
        const params = {
            data: visitor,
            width: '511px',
            height: '782px'
        };
        this.dialog.open(ClientInfoComponent, params);
    }
} 
