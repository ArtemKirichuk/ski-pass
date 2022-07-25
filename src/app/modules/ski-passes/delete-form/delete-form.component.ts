import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import {  i18nRU } from 'src/app/modules/shared/constants';
import { SkiPassType } from 'src/app/types/types';


@Component({
    selector: 'app-delete-form',
    templateUrl: './delete-form.component.html',
    styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent {
  
    i18nRU = i18nRU
    constructor(@Inject(MAT_DIALOG_DATA) public data: SkiPassType) {  }

}
