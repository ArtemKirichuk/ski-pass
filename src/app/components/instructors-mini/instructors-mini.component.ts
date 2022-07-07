import { Component, OnInit } from '@angular/core';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructors-mini',
    templateUrl: './instructors-mini.component.html',
    styleUrls: ['./instructors-mini.component.scss']
})
export class InstructorsMiniComponent implements OnInit {

    INSTRUCTORS = 'Инструкторы';
    ADD = 'Добавить нового';
    ALL = 'Все';
    instructors: InstructorType[] = [];
    showVisitors = true;

    arrowUpURL = '../../../assets/images/arrow-up-icon.svg';
    arrowDownURL = '../../../assets/images/arrow-down-icon.svg';
    minimizeURL = this.arrowUpURL;

    constructor(private instructorService: InstuctorService) {

    }

    ngOnInit(): void {
        for(let i = 0; i < 12; i++) {
            const instructor: InstructorType = {
                fio: 'Щекочихина-Крестовоздвиженская Мерседес Ивановна',
                birthday: new Date(1925, 4, 2),
                category: 'Лыжи',
                photo: '../../../assets/images/user-default.jpg',
                sex: 'Муж',
                visiter: '',
                startWork: new Date(2012, 0, 0)
            };

            this.instructors.push(instructor);
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
