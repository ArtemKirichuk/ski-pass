import { Component, OnInit } from '@angular/core';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

    instructors: InstructorType[] = [];
    displayedItem: InstructorType = {} as InstructorType;
    showVariants = false;

    constructor(private instructorService: InstuctorService) { 
    // for(let i = 0; i < 10; i++) {
    //   const instr: InstructorType = {
    //     birthday: new Date(1996, 3, 4),
    //     category: "snowboard",
    //     fio: `Альбер Эйнштейн ${i}`,
    //     photo: "",
    //     sex: "male",
    //     visiter: '../../../assets/images/user-default.jpg',
    //     startWork: new Date(2010, 9, 4)
    //   }
    //   this.instructors.push(instr);
    // }
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            this.instructors = resp;
        });    
    }

    toggleVariants() {
        this.showVariants = !this.showVariants;
    }

    selectItem(item: InstructorType) {
        this.displayedItem = item;
        this.showVariants = false;
    }

}
