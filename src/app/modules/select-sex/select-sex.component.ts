import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-select-sex',
  templateUrl: './select-sex.component.html',
  styleUrls: ['./select-sex.component.scss']
})
export class SelectSexComponent implements ControlValueAccessor {

  @Input()value = '';
  @Input() title = '';
  SEX_LIST = ['мужской', 'женский'];
  showVariants = false;

  onChange = (val:string)=>{this.value = val;};
  onTouch = (val:string)=>{this.value = val;};


  toggleVariants() {
      this.showVariants = !this.showVariants;
  }

  selectItem(item: string) {
      this.showVariants = false;
      this.value = item;
      this.onChange(this.value);
      this.onTouch(this.value);  
  }

  writeValue(val: string): void {
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
