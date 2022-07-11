import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { bootstrapApplication } from '@angular/platform-browser';
import { Subject, takeUntil } from 'rxjs';
import { SkipassService } from 'src/app/services/skipass.service';
import { i18n } from 'src/app/types/helper';
import { KeySkiPassType, SkiPassType } from 'src/app/types/types';

import { DeleteFormComponent } from '../delete-form/delete-form.component';

@Component({
    selector: 'app-ski-passes-card',
    templateUrl: './ski-passes-card.component.html',
    styleUrls: ['./ski-passes-card.component.scss']
})
export class SkiPassesCardComponent extends i18n {
    @Input() skipass!: SkiPassType;
    constructor(private matDialog: MatDialog) {
        super()
    }
    @Output() deleteCard: EventEmitter<KeySkiPassType> = new EventEmitter<KeySkiPassType>()
    destroy$ = new Subject()
    delete() {
        // this.skipassService
    }
    getPhoto(img: string) {
        return `url(${img})`
    }
    openDeleteForm() {
        const config = { height: '580px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(DeleteFormComponent, config);
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(isDelete => {
                if (isDelete) {
                    this.deleteCard.emit({ cardNumber: this.skipass.cardNumber });
                }
            })
    }
}
