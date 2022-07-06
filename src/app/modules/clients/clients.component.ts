import { Component } from '@angular/core';
import { VisitorType } from 'src/app/types/types';


@Component({
    selector: 'app-clients',
    templateUrl: './clients.component.html',
    styleUrls: ['./clients.component.scss']
})
export class ClientsComponent {

    CLIENTS = 'Посетители';
    ADD = 'Добавить нового';

    showedVisitors: VisitorType[] = [];
    allVisitors: VisitorType[] = [];

    constructor() {
        for(let i = 0; i < 30; i++) {
            if (i % 2 === 0) {
                const visitor: VisitorType = {
                    fio: `Иванов Иван Иванович ${i}`,
                    birthday: new Date(1970, 0, 1),
                    photo: '../../../assets/images/user-default.jpg',
                    instructor: '',
                    skiPass: 0,
                    sport: ''
                };
                this.allVisitors.push(visitor);
              
            }
            else {
                const visitor: VisitorType = {
                    fio: `Петрова Наталья Ивановна ${i}`,
                    birthday: new Date(1975, 0, 1),
                    photo: '../../../assets/images/user-default.jpg',
                    instructor: '',
                    skiPass: 0,
                    sport: ''
                };
                this.allVisitors.push(visitor);
            }
        }
    }

    onChangedPage(event: VisitorType[]) {
        this.showedVisitors = event;
    }
}
