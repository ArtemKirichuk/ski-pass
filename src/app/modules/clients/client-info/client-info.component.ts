import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {  VisitorType } from 'src/app/types/types';
import { i18nRU, srcAsset } from '../../shared/helper';

@Component({
    selector: 'app-client-info',
    templateUrl: './client-info.component.html',
    styleUrls: ['./client-info.component.scss']
})
export class ClientInfoComponent {
    srcAsset = srcAsset
    i18nRU = i18nRU
    constructor(
        @Inject(MAT_DIALOG_DATA) public visitor: VisitorType
    ) { }


}
