import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { i18n } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';

@Component({
    selector: 'app-display-form',
    templateUrl: './display-form.component.html',
    styleUrls: ['./display-form.component.scss']
})
export class DisplayFormComponent extends i18n {

    constructor(@Inject(MAT_DIALOG_DATA) public data: SkiPassType) {
        super();
    }

}
