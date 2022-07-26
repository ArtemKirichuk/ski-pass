import { Component, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALIDATORS, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';
import { PersonCardType } from 'src/app/types/types';
import { attribute, srcAsset } from '../constants';


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

export class SimpleSelectComponent implements ControlValueAccessor, OnInit {
  @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
  @Input() placeholder: string = 'placeholder';
  @Input() data: string[] = [];
  @Input() persanData: PersonCardType[] = [];
  @Input() value = '';
  @Input() persanMod: boolean = false;
  srcAsset = srcAsset;
  filteredOptions!: Observable<PersonCardType[]>;
  // inputControl = new FormControl(this.value);
  attribute = attribute;
  constructor() { }
  ngOnInit(): void { 
    this.filteredOptions = of(this.filterPersan(''));
  }
  private filterPersan(value: string): PersonCardType[] {
    const filterValue = value.toLowerCase();
    return this.persanData.filter((persan) => {
      return persan.header.toLocaleLowerCase().includes(filterValue)
    })
  }

  openAutoCompleteMenu(event: Event) {
    event.stopImmediatePropagation();
    this.autocomplete.openPanel()
  }
  changeInput(event: Event) {

    // if (!this.persanMod) {
    //   return
    // }
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.filteredOptions = of(this.filterPersan(value || ''));
  }
  onChange(value: string):void {
    this.value = value;
  }
  onTouched(value: string):void {
    this.value = value;
  }
  selectItem(value: string): void {
    this.onChange(value);
  }
  writeValue(value: string): void {

    this.onChange(value);
  }

  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: (val: string) => void) {
    this.onTouched = fn;
  }
}
