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
    showInstructors = true;

    arrowUpURL = '../../../assets/images/arrow-up-icon.svg';
    arrowDownURL = '../../../assets/images/arrow-down-icon.svg';
    minimizeURL = this.arrowUpURL;

    constructor(private instructorService: InstuctorService) {
        
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            this.instructors = resp.slice(0, 12);
        });
    }

    minimize(): void {
        this.showInstructors = !this.showInstructors;

        if (this.minimizeURL === this.arrowUpURL) {
            this.minimizeURL = this.arrowDownURL;
        }
        else {
            this.minimizeURL = this.arrowUpURL;
        }
    }  
}
