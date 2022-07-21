import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SkipassService } from 'src/app/services/skipass.service';
import { VisitorType } from 'src/app/types/types';
import { attr, i18nErrors, i18nRU, srcAsset } from '../../shared/helper';

@Component({
    selector: 'app-edit-clients',
    templateUrl: './edit-clients.component.html',
    styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent {
    i18nRU = i18nRU;
    i18nErrors=i18nErrors;
    attr=attr;
    editClientsForm: FormGroup;
    photoClients: string;
    clickEditButton = false;
    isCreate:boolean;
    skipasses:string[] = [];
    constructor(
        private skipassService:SkipassService,
        @Inject(MAT_DIALOG_DATA) public visiter: VisitorType ,
        private dialogRef: MatDialogRef<EditClientsComponent>) {
            this.isCreate = false;
        if (!visiter) {
            this.isCreate = true;
            visiter = {} as VisitorType;
        }
        this.photoClients = visiter.photo ? visiter.photo : srcAsset.DEFAULT_IMG;
        this.editClientsForm = new FormGroup({
            name:               new FormControl(visiter?.fio, Validators.required),
            birthday:           new FormControl(visiter?.birthday, Validators.required),
            numberSkiPasses:    new FormControl(visiter?.skiPass, Validators.required),
            instructor:         new FormControl(visiter?.instructor),
            sport:              new FormControl(visiter?.sport, Validators.required)
        });
        skipassService.get().subscribe((skipass) => {
            this.skipasses = skipass.map(e => String(e.cardNumber))
        })
    }

    handlerClose($event: boolean): void {
        if ($event) {
            this.dialogRef.close(null);
        }
    }

    handlerEvent(img: string): void {
        this.photoClients = img;
    }

    editClients() {
        this.clickEditButton = true;
        if (this.editClientsForm.valid) {
            const formValue = this.editClientsForm.getRawValue();
            const clients: VisitorType = {
                photo: this.photoClients,
                fio: formValue.name,
                birthday: formValue.birthday,
                instructor: formValue.instructor,
                skiPass: formValue.numberSkiPasses,
                sport: formValue.sport
            };
            this.dialogRef.close(clients);
        }
    }

    checkEmpty(param: string): boolean {
        return this.editClientsForm.get(param)?.value === null || this.editClientsForm.get(param)?.value === '';
    }

    checkLen(param: string): boolean {
        return `${this.editClientsForm.get(param)?.value}`.length !== 16;
    }

}
