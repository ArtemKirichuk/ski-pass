import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { InstructorType } from 'src/app/types/types';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    providers:[
        {
            provide:NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=>SelectComponent),
            multi:true
        }
    ]
})
export class SelectComponent implements OnInit, ControlValueAccessor {

    @Input()value = '';

    instructors: InstructorType[] = [];
    displayedItem: InstructorType = {} as InstructorType;
    showVariants = false;

    onChange = (val:string)=>{this.value = val;};
    onTouch = (val:string)=>{this.value = val;};

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
            this.instructors = resp.slice(0, 10);
        });    
    }

    toggleVariants() {
        this.showVariants = !this.showVariants;
    }

    selectItem(item: InstructorType) {
        this.displayedItem = item;
        this.showVariants = false;
        this.value = item.fio;
        this.onChange(this.value);
        this.onTouch(this.value);  
    }

    writeValue(val: string): void {
        console.log('val', val);
        if (val) {
            //this.displayedItem = obj;
            this.value = val;
            this.onChange(val);
            this.onTouch(val);            
        }        
    }

    registerOnChange(fn: (val:string) => void): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: (val:string) => void): void {
        this.onTouch = fn;
    }

}
