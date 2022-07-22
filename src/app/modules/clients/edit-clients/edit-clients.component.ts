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
    get name() { return this.editClientsForm.get('name'); }
    get birthday() { return this.editClientsForm.get('birthday'); }
    get numberSkiPasses() { return this.editClientsForm.get('numberSkiPasses'); }
    get instructor() { return this.editClientsForm.get('instructor'); }
    get sport() { return this.editClientsForm.get('sport'); }
    constructor(
        private skipassService:SkipassService,
        @Inject(MAT_DIALOG_DATA) public visiterData: VisitorType ,
        private dialogRef: MatDialogRef<EditClientsComponent>) {
            this.isCreate = false;
        if (!visiterData) {
            this.isCreate = true;
            visiterData = {} as VisitorType;
        }
        this.photoClients = visiterData.photo ? visiterData.photo : srcAsset.DEFAULT_IMG;
        this.editClientsForm = new FormGroup({
            name:               new FormControl(visiterData?.fio, Validators.required),
            birthday:           new FormControl(visiterData?.birthday, Validators.required),
            numberSkiPasses:    new FormControl(visiterData?.skiPass, Validators.required),
            instructor:         new FormControl(visiterData?.instructor, Validators.required),
            sport:              new FormControl(visiterData?.sport, Validators.required)
        });
        skipassService.get().subscribe((skipass) => {
            this.skipasses = skipass.map(e => String(e.cardNumber))
        })
    }
    error(name:string):boolean{
        const erros = this.editClientsForm.get(name)?.errors;
        return erros?true:false;
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

}
