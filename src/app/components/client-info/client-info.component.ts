import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-client-info',
    templateUrl: './client-info.component.html',
    styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {

    TITLE = 'Карточка посетителя';
    BIRTHDAY = 'Дата рождения';
    SKI_PASS_NUMBER = 'Номер ски-пасса';
    APPOINTED_INSTRUCTOR = 'Назначенный тренер';
    OK = 'OK';

    visitor: VisitorType = {
        fio: 'Петров Василий',
        birthday: new Date(1994, 2, 1),
        instructor: 'Васечкин Пётр',
        photo: '../../../assets/images/user-default.jpg',
        skiPass: 88005553535,
        sport: 'Сноуборд'
    };

    constructor(@Inject(MAT_DIALOG_DATA) public _visitor: VisitorType) { 
        this.visitor = _visitor;
    }
}
