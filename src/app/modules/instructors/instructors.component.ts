import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-instructors',
    templateUrl: './instructors.component.html',
    styleUrls: ['./instructors.component.scss']
})
export class InstructorsComponent implements OnInit{

    INSTRUCTORS = 'Инструкторы';
    ADD = 'Добавить нового';

    showedInstructors: InstructorType[] = [];
    allInstructors: InstructorType[] = [];

    constructor(private dialog : MatDialog,
                private instructorService: InstuctorService) {
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            this.allInstructors = resp;
        });
    }

    onChangedPage(event: InstructorType[]): void {
        this.showedInstructors = event;
    }    
}
