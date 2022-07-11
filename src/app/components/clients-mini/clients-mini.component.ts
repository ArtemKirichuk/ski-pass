import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, map, Subscription } from 'rxjs';
import { AddNewClientsComponent } from 'src/app/modules/add-new-clients/add-new-clients.component';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorType } from 'src/app/types/types';
import { ClientDeleteComponent } from '../client-delete/client-delete.component';

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
            // this.visitors = resp.slice(0, 12);
            this.visitorService.sendVisitorToStream(resp);
        });

        this.subscription = this.visitorService.getVisitorsListStream$()
            .pipe(
                map(value => value.slice(0, 10))
            )
            .subscribe(resp => {
                this.visitors$.next(resp);           
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
        console.log('tut');
        this.dialog.open(AddNewClientsComponent, {width:'35%'});
    }

    onDeleteVisitor(visitor: VisitorType) {
        const data = { data: visitor };
        const dialogRef = this.dialog.open(ClientDeleteComponent, data);
        dialogRef.afterClosed().subscribe(resp => {
            if(resp) {
                this.visitorService.deleteVisitor(visitor).subscribe(resp => {
                    if (resp) {
                        this.visitorService.getVisitors().subscribe(visitorsList => {
                            this.visitorService.sendVisitorToStream(visitorsList);
                        });
                    }
                });
            }
        });
    }
}
