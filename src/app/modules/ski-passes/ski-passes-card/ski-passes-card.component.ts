import { Component, Input } from '@angular/core';
import { SkipassService } from 'src/app/services/skipass.service';
import { i18n } from 'src/app/types/helper';
import { SkiPassType } from 'src/app/types/types';

@Component({
    selector: 'app-ski-passes-card',
    templateUrl: './ski-passes-card.component.html',
    styleUrls: ['./ski-passes-card.component.scss']
})
export class SkiPassesCardComponent extends i18n {
    @Input() skipass!: SkiPassType;
    constructor() {
        super()
    }
    delete() {
        // this.skipassService
    }
}
