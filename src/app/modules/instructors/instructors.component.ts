import { Component } from '@angular/core';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent {

    INSTRUCTORS = 'Инструкторы';
    ADD = 'Добавить нового';

    showedInstructors: InstructorType[] = [];
    allInstructors: InstructorType[] = [];

    constructor() {
        for(let i = 0; i < 100; i++) {
            const instructor: InstructorType = {
                fio: 'Клеткин Николай Кимович',
                birthday: new Date(1964, 0, 7),
                category: 'Лыжи',
                photo: '../../../assets/images/user-default.jpg',
                sex: 'муж',
                visiter: '',
                startWork: new Date(2012, 0, 12)
            };

            this.allInstructors.push(instructor);
        }
    }

    onChangedPage(event: InstructorType[]) {
        this.showedInstructors = event;
    }

}
