import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
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
        },
        {
            provide: NG_VALIDATORS,
            useExisting: SelectComponent,
            multi: true,
        },
    ]
})
export class SelectComponent implements OnInit, ControlValueAccessor, Validator {

    @Input() value = '';
    @Input() placeholder = '';

    instructors: InstructorType[] = [];
    showVariants = false;
    selectedItems: Set<string> = new Set();

    filteredOptions: BehaviorSubject<InstructorType[]> = new BehaviorSubject<InstructorType[]>([]);

    onChange = (val:string)=> {this.value = val;};
    onTouch = (val:string)=>{this.value = val;};

    constructor(private instructorService: InstuctorService) { 
    }

    ngOnInit(): void {
        this.instructorService.getInstructors().subscribe(resp => {
            this.instructors = resp;
            this.filteredOptions = new BehaviorSubject<InstructorType[]>(resp);
        });    
    }

    tempFn(value: string) {
        this.instructors.some(el => el.fio === value);
    }

    validate(control: AbstractControl): ValidationErrors | null {        
        if (control.value) {
            const value = <string>control.value;
            const splittedVals = value.split(', ');

            const oks = splittedVals.map(val => {
                return this.instructors.some(el => el.fio === val);
            });

            return oks.every(el => el === true)? null : {invalid: true};

        }
        return {invalid: true};
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

    modelChanged(val: string): void {        

        const editedSelectedItems = new Set<string>();
        const splittedVals = val.split(', ');
        if (splittedVals.length > 1 ) {
            splittedVals.forEach(el => {
                const el2 = el.replace(',', '');
                if (this.selectedItems.has(el2)) {
                    editedSelectedItems.add(el2);
                }
            });
    
            this.selectedItems = editedSelectedItems;
        }

        const valuesArr = Array.from(this.selectedItems);
        this.value = valuesArr.join(', '); 

        const instructorsStrings = val.split(', ');
        const compareVal = instructorsStrings[instructorsStrings.length-1];

        const filteredVals = this.instructors.filter(el => el.fio.toLowerCase().startsWith(compareVal));

        this.filteredOptions.next(filteredVals);

        this.onChange(this.value);
        this.onTouch(this.value);  
    }
}
