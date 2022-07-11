import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    providers:[
        {
            provide:NG_VALUE_ACCESSOR,
            useExisting: forwardRef(()=>InputComponent),
            multi:true
        }
    ]
})
export class InputComponent implements ControlValueAccessor{

  @Input() title  = 'title';
  @Input() value  = '';
  @Input() type = 'text';
  onChange = (val:string)=>{this.value = val;};
  onTouched = (val:string)=>{this.value = val;};

  writeValue(value:string):void{
      if(value){
          this.value = value;
          this.onChange(this.value);
          this.onTouched(this.value);
      }
  }

  registerOnChange(fn :  (val:string) => void): void {
      this.onChange = fn;
  }
  registerOnTouched(fn:  (val:string) => void) : void{
      this.onTouched = fn;
  }

  
}
