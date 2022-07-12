import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


import { i18n } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';


@Component({
    selector: 'app-delete-form',
    templateUrl: './delete-form.component.html',
    styleUrls: ['./delete-form.component.scss']
})
export class DeleteFormComponent extends i18n  {
  

    constructor(@Inject(MAT_DIALOG_DATA) public data: SkiPassType) { 
        super(); 
    }

}
