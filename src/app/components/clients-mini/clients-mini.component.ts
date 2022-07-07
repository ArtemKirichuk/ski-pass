import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddNewClientsComponent } from 'src/app/modules/add-new-clients/add-new-clients.component';
import { UserService } from 'src/app/services/user.service';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-clients-mini',
    templateUrl: './clients-mini.component.html',
    styleUrls: ['./clients-mini.component.scss']
})
export class ClientsMiniComponent implements OnInit {

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';
    ALL = 'Все';
    visitors: VisitorType[] = [];
    showVisitors = true;

    arrowUpURL = '../../../assets/images/arrow-up-icon.svg';
    arrowDownURL = '../../../assets/images/arrow-down-icon.svg';
    minimizeURL = this.arrowUpURL;

    constructor(private visitorService: VisitorService,
                private dialog:MatDialog) { }

    ngOnInit(): void {
        this.visitorService.getVisitors().subscribe(resp => {
            this.visitors = resp.slice(0, 12);
        });
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

}
