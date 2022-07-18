import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HeaderDatepickerComponent } from 'src/app/modules/shared/datepicker/header-datepicker/header-datepicker.component';

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
    IMG_DATEPICKER = '../../assets/images/datepicker.svg';

    @Input() dayPlaceholder = 'Дата';
    exampleHeader = HeaderDatepickerComponent;
    @Input() value  = {} as Date;
    
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer){
        iconRegistry.addSvgIcon('datepicker', sanitizer.bypassSecurityTrustResourceUrl(this.IMG_DATEPICKER)); 
    }
    
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
    // filterInputKeyupUpTo(){
    //     this.lastTo = this.parseInputDate(this.toInput.nativeElement.value)
    //     if (this.lastTo) {
    //       this.lastTo.setDate(this.lastTo.getDate()+1)
    //     }
    //     this.filterDates()
    //   }
    //   private parseInputDate(v):Date{
    //     //this was a manual change in the input and needs to be parsed
    //     let a:Array<any> = v.split('.')
    //     a.forEach((v, i) => a[i] = parseInt(v) + (i == 1 ? -1 : 0))
    //     console.log(new Date(a[2], a[1], a[0]))
    //     return  new Date(a[2], a[1], a[0])
    // }
  
}

