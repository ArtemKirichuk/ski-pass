import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructor-info',
    templateUrl: './instructor-info.component.html',
    styleUrls: ['./instructor-info.component.scss']
})
export class InstructorInfoComponent {

    TITLE = 'Карточка инструктора';
    BIRTHDAY = 'Дата рождения';
    SEX = 'Пол';
    APPOINTED_VISITOR = 'Назначенный посетитель';
    OK = 'OK';

    instructor: InstructorType = {} as InstructorType;

    constructor(@Inject(MAT_DIALOG_DATA) public _instructor: InstructorType) { 
        this.instructor = _instructor;
    }
}
