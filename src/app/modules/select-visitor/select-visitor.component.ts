import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { VisitorService } from 'src/app/services/visitor.service';
import { PersanCardType, VisitorType } from 'src/app/types/types';
import { AgePipe } from '../shared/age/age.pipe';
import { i18nRU } from '../shared/helper';

@Component({
    selector: 'app-select-visitor',
    templateUrl: './select-visitor.component.html',
    styleUrls: ['./select-visitor.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectVisitorComponent),
            multi: true
        }
    ]
})
export class SelectVisitorComponent implements OnInit, ControlValueAccessor {

  @Input() value = '';
  @Input() placeholder = '';

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
  getCardData(visiter:VisitorType):PersanCardType{
    return { 
        header: visiter.fio,
        title: AgePipe.prototype.transform(visiter.birthday),
        img: visiter.photo,
        // deleteBtn: i18nRU.DELETE,
        // editBtn: i18nRU.EDIT,
        // editContext: i18nRU.APPOINT_COACH
    }
}
}
