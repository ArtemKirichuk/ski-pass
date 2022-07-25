import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import {  i18nRU } from 'src/app/modules/shared/constants';
import { KeySkiPassType, SkiPassType } from 'src/app/types/types';


@Component({
    selector: 'app-display-form',
    templateUrl: './display-form.component.html',
    styleUrls: ['./display-form.component.scss']
})
export class DisplayFormComponent {
    i18nRU = i18nRU
    destroy$ = new Subject();
  @Output() deleteCard = new EventEmitter<KeySkiPassType>();
  constructor(
      @Inject(MAT_DIALOG_DATA) public data: SkiPassType
  ) {  }
}
