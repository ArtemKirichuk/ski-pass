import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { i18n } from 'src/app/types/helper';
import { KeySkiPassType, SkiPassType } from 'src/app/types/types';


@Component({
    selector: 'app-display-form',
    templateUrl: './display-form.component.html',
    styleUrls: ['./display-form.component.scss']
})
export class DisplayFormComponent extends i18n {
    destroy$ = new Subject();
  @Output() deleteCard = new EventEmitter<KeySkiPassType>();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: SkiPassType
  ) {
      super();
  }
  openDeleteForm(){
    
  }
  openEditForm(){

  }
}
