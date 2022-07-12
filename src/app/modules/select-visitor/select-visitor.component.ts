import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor.service';
import { VisitorType } from 'src/app/types/types';

@Component({
    selector: 'app-select-visitor',
    templateUrl: './select-visitor.component.html',
    styleUrls: ['./select-visitor.component.scss']
})
export class SelectVisitorComponent implements OnInit, ControlValueAccessor {

  @Input()value = '';

  visitors: VisitorType[] = [];
  selectedItems: Set<string> = new Set();
  showVariants = false;

  onChange = (val:string)=>{this.value = val;};
  onTouch = (val:string)=>{this.value = val;};

  constructor(private visitorService: VisitorService) { 
  }

  ngOnInit(): void {
      this.visitorService.getVisitors().subscribe(resp => {
          this.visitors = resp;
      });    
  }

  toggleVariants(): void {
      this.showVariants = !this.showVariants;
  }

  selectItem(item: VisitorType): void {
      this.showVariants = false;
      this.selectedItems.add(item.fio);
      const valueArr = Array.from(this.selectedItems);
      this.value = valueArr.join(', ');

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
