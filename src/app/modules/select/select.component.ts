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
    showVariants = false;
    selectedItems: Set<string> = new Set();

    onChange = (val:string)=>{this.value = val;};
    onTouch = (val:string)=>{this.value = val;};

    constructor(private instructorService: InstuctorService) { 
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
        this.showVariants = false;
        this.selectedItems.add(item.fio);
        const valuesArr = Array.from(this.selectedItems);
        this.value = valuesArr.join(', '); 

        this.onChange(this.value);
        this.onTouch(this.value);  
    }

    writeValue(val: string): void {
        if (val) {
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
