import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ClientDeleteComponent } from 'src/app/components/client-delete/client-delete.component';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorType } from 'src/app/types/types';
import { AddNewClientsComponent } from '../add-new-clients/add-new-clients.component';
import { EditClientsComponent } from '../edit-clients/edit-clients.component';
import { PaginatorComponent } from '../paginator/paginator.component';


@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsComponent implements OnInit, OnDestroy{

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';

    showedVisitors: VisitorType[] = [];
    @ViewChild('paginator') paginator:PaginatorComponent<VisitorType> | undefined;

    allVisitors$ = new BehaviorSubject<VisitorType[]>([]);
    subscription = new Subscription();

    constructor(private dialog : MatDialog,
                private visitorService: VisitorService) {        
    }

    ngOnInit(): void {
        this.visitorService.getVisitors().subscribe(resp=> {
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

    onChangedPage(event: VisitorType[]): void  {
        this.showedVisitors = event;
    }

    addNewClients(): void {
        const dialogRef = this.dialog.open(AddNewClientsComponent, {width:'35%'});    
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

    onDeleteVisitor(visitor: VisitorType): void {
        const data = { data: visitor };
        const dialogRef = this.dialog.open(ClientDeleteComponent, data);
        dialogRef.afterClosed().subscribe(ok => {
            if(ok) {
                this.visitorService.deleteVisitor(visitor).subscribe(resp => {
                    if (resp) {
                        this.updateVisitors();
                        // this.visitorService.getVisitors().subscribe(visitorsList => {
                        //     this.visitorService.sendVisitorToStream(visitorsList);
                        // });
                    }
                });
            }
        });        
    }

    onEditVisitor(visitor: VisitorType): void  {
        const dialogRef = this.dialog.open(EditClientsComponent, {data : {clients : visitor}, width:'35%'});
        
        dialogRef.afterClosed().subscribe(visitor => {
            console.log('edit', visitor);
        });
    }
}
