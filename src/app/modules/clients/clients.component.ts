import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorType } from 'src/app/types/types';
import { AddNewClientsComponent } from '../add-new-clients/add-new-clients.component';


@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';

    showedVisitors: VisitorType[] = [];
    allVisitors: VisitorType[] = [];

    constructor(private dialog : MatDialog,
                private visitorService: VisitorService) {        
    }

    ngOnInit(): void {
        this.visitorService.getVisitors().subscribe(resp=> {
            this.allVisitors = resp;
        });
    }

    onChangedPage(event: VisitorType[]): void  {
        this.showedVisitors = event;
    }

    addNewClients(): void {
        console.log('tut');
        this.dialog.open(AddNewClientsComponent, {width:'35%'});
    }
}
