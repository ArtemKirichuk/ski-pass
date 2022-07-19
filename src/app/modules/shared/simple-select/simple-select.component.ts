import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';


@Component({
  selector: 'app-simple-select',
  templateUrl: './simple-select.component.html',
  styleUrls: ['./simple-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SimpleSelectComponent),
      multi: true,
    }
    // ,
    // {
    //   provide: NG_VALIDATORS,
    //   useExisting: SimpleSelectComponent,
    //   multi: true,
    // }

  ]
})
export class SimpleSelectComponent implements ControlValueAccessor {
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  @Input() placeholder: string = 'placeholder';
  @Input() data: Array<string> = [];
  constructor() { }


  openAutoCompleteMenu(event: Event) {
    event.stopImmediatePropagation();
    this.autocomplete.openPanel()
  }
  value: string = ''
  onChange(value: string) {
    this.value = value;
  }
  // onTouched(value: string) {
  //   this.value = value;
  // }
  selectItem(value: string): void {
    this.onChange(value);
    // this.onTouched(value);
  }
  writeValue(value: string): void {
    if (value) {
      this.onChange(value);
      // this.onTouched(value);
    }
  }

  modelChanged(value: string): void {
    this.onChange(value);
    // this.onTouched(value);
  }
  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (val: string) => void) {
    // this.onTouched = fn;
  }
}
