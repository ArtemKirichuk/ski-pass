import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { HeaderDatepickerComponent } from 'src/app/components/header-datepicker/header-datepicker.component';

class CustomDateAdapter extends MomentDateAdapter {
    override getDayOfWeekNames() {
        return ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    }
}

const MATERIAL_DATEPICKER_FORMATS = {
    parse: {
        dateInput: 'DD.MM.YYYY', 
    },
    display: {
        dateInput: 'DD.MM.YYYY',
        monthYearLabel: 'MMMM YYYY г.',
        dateA11yLabel: 'DD.MM.YYYY',
        monthYearA11yLabel: 'MMMM YYYY',
    },

};

@Component({
    selector: 'app-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: ['./datepicker.component.scss'],
    providers:[
        {provide: DateAdapter, useClass: CustomDateAdapter, deps: [MAT_DATE_LOCALE]},
        {provide: MAT_DATE_FORMATS, useValue: MATERIAL_DATEPICKER_FORMATS},
        {
            provide:NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=>DatepickerComponent),
            multi:true
        }
    ]
})

export class DatepickerComponent  implements ControlValueAccessor{
    @Input() dayPlaceholder = 'Дата';
    exampleHeader = HeaderDatepickerComponent;
    @Input() value  = {} as Date;
    
    
    onChange = (val:Date)=>{this.value = val;};
    onTouched = (val:Date)=>{this.value = val;};

    writeValue(value:Date):void{
        if(value){
            this.value = value;
            this.onChange(this.value);
            this.onTouched(this.value);
        }
    }

    registerOnChange(fn :  (val:Date) => void): void {
        this.onChange = fn;
    }
    registerOnTouched(fn:  (val:Date) => void): void {
        this.onTouched = fn;
    }
    
    getDatePicker():void{
        
        const input = document.createElement('input');
        input.type = 'date';
    }
  
    orgValueChange(value:string){
        const [day, month, year] = value.split('.');
        this.onChange(new Date(+year, +month - 1, +day));
        this.onTouched(new Date(+year, +month - 1, +day));
    }
}

