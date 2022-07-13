import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { i18n } from 'src/app/types/helper';
import { KeySkiPassType, SkiPassType, updateType } from 'src/app/types/types';
import { DeleteFormComponent } from '../delete-form/delete-form.component';
import { DisplayFormComponent } from '../display-form/display-form.component';
import { SkiPassesFormComponent } from '../form/form.component';

@Component({
    selector: 'app-ski-passes-card',
    templateUrl: './ski-passes-card.component.html',
    styleUrls: ['./ski-passes-card.component.scss']
})
export class SkiPassesCardComponent extends i18n {
    @Input() skipass!: SkiPassType;
    @Output() deleteCard: EventEmitter<KeySkiPassType> = new EventEmitter<KeySkiPassType>();
    @Output() editCard: EventEmitter<updateType<KeySkiPassType, SkiPassType>> = new EventEmitter<updateType<KeySkiPassType, SkiPassType>>();
    destroy$ = new Subject();
    constructor(private matDialog: MatDialog) {
        super();
    }

    getPhoto(img: string) {
        return `no-repeat url(${img})`;
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
            });
    }
    openEditForm() {
        const config = { height: '730px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(SkiPassesFormComponent, config);
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((updateData: updateType<KeySkiPassType, SkiPassType>) => {
                if (updateData) {
                    this.editCard.emit(updateData);
                }
            });
    }
    openDisplayForm() {
        const config = { height: '770px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(DisplayFormComponent, config);
        dialogRef.afterClosed().pipe(takeUntil(this.destroy$))
            .subscribe(isEdit => {
                if (isEdit) {
                    this.openEditForm()
                } else if (isEdit === false) {
                    this.openDeleteForm()
                }
            });;
    }

    openMenu(event: Event) {
        event.stopImmediatePropagation()
    }
}
