import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';
import { i18nRU } from 'src/app/modules/shared/constants';
import { KeySkiPassType, SkiPassType, updateType } from 'src/app/types/types';
import { DeleteFormComponent } from '../delete-form/delete-form.component';
import { DisplayFormComponent } from '../display-form/display-form.component';
import { SkiPassesFormComponent } from '../form/form.component';

@Component({
    selector: 'app-ski-passes-card',
    templateUrl: './ski-passes-card.component.html',
    styleUrls: ['./ski-passes-card.component.scss']
})
export class SkiPassesCardComponent{
    @Input() skipass!: SkiPassType;
    @Output() deleteCard: EventEmitter<KeySkiPassType> = new EventEmitter<KeySkiPassType>();
    @Output() editCard: EventEmitter<updateType<KeySkiPassType, SkiPassType>> = new EventEmitter<updateType<KeySkiPassType, SkiPassType>>();
    destroy$ = new Subject();
    i18nRU = i18nRU
    constructor(private matDialog: MatDialog) {
        
    }

    getPhoto(img: string):string {
        return `no-repeat url(${img})`;
    }
    openDeleteForm(redirectToDispaly?:boolean):void {
        const config = { height: '580px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(DeleteFormComponent, config);
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe(isDelete => {
                if (isDelete) {
                    this.deleteCard.emit({ cardNumber: this.skipass.cardNumber });
                    return
                }
                if(redirectToDispaly) this.openDisplayForm()
            });
    }
    openEditForm(redirectToDispaly?:boolean):void {
        const config = { height: '730px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(SkiPassesFormComponent, config);
        dialogRef.afterClosed()
            .pipe(takeUntil(this.destroy$))
            .subscribe((updateData: updateType<KeySkiPassType, SkiPassType>) => {
                if (updateData) {
                    this.editCard.emit(updateData);
                    return
                }
                if(redirectToDispaly) this.openDisplayForm()
            });
    }
    openDisplayForm():void {
        const config = { height: '770px', width: '500px', data: this.skipass };
        const dialogRef = this.matDialog.open(DisplayFormComponent, config);
        dialogRef.afterClosed().pipe(takeUntil(this.destroy$))
            .subscribe(isEdit => {
                if (isEdit) {
                    this.openEditForm(true);
                } else if (isEdit === false) {
                    this.openDeleteForm(true);
                }
            });
    }

    openMenu(event: Event):void {
        event.stopImmediatePropagation();
    }
}
