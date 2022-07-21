import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { srcAsset } from '../helper';

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
  ]
})
export class SimpleSelectComponent implements ControlValueAccessor {
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  @Input() placeholder: string = 'placeholder';
  @Input() data: Array<string> = [];
  @Input() value ='';
  constructor() { }
  srcAsset = srcAsset

  openAutoCompleteMenu(event: Event) {
    event.stopImmediatePropagation();
    this.autocomplete.openPanel()
  }
  onChange(value: string) {
    this.value = value;
  }

  selectItem(value: string): void {
    this.onChange(value);
  }
  writeValue(value: string): void {
    if (value) {
      this.onChange(value);
    }
  }

  modelChanged(value: string): void {
    this.onChange(value);
  }
  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (val: string) => void) {

  }
}
