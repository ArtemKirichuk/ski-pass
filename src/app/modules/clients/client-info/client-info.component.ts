import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  VisitorType } from 'src/app/types/types';

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

    constructor(
        @Inject(MAT_DIALOG_DATA) public visitor: VisitorType
    ) { }


}
