import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
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

    constructor(private userService: UserService) { }

    ngOnInit(): void {
    // this.userService.getVisitors().subscribe(resp => {
    //   this.visitors = resp.slice(0, 12);
    // });
        for(let i = 0; i < 12; i++) {
            const visitor: VisitorType = {
                fio: 'Жмышенко Валерий Альбертович',
                birthday: new Date(1925, 4, 2),
                instructor: '',
                photo: '../../../assets/images/user-default.jpg',
                skiPass: 0,
                sport: ''
            };

            this.visitors.push(visitor);
        }
    }

    minimize() {
        this.showVisitors = !this.showVisitors;

        if (this.minimizeURL === this.arrowUpURL) {
            this.minimizeURL = this.arrowDownURL;
        }
        else {
            this.minimizeURL = this.arrowUpURL;
        }
    }

}
