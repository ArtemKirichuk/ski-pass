import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SkipassService } from 'src/app/services/skipass.service';
import { VisitorType } from 'src/app/types/types';
import {  attr, i18nErrors, i18nRU, srcAsset } from '../../shared/helper';


@Component({
    selector: 'app-add-new-clients',
    templateUrl: './add-new-clients.component.html',
    styleUrls: ['./add-new-clients.component.scss']
})
export class AddNewClientsComponent {

    value = '';
    clickAddButton = false;
    photoClients: string = srcAsset.DEFAULT_IMG;
    i18nRU = i18nRU;
    i18nErrors = i18nErrors;
    attr = attr;
    addClientsForm: FormGroup;
    skipasses: string[] = []
    constructor(private dialogRef: MatDialogRef<AddNewClientsComponent>,
        private skipassService: SkipassService) {
        
        this.addClientsForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            birthday: new FormControl(null, Validators.required),
            numberSkiPasses: new FormControl(null, [
                Validators.required,
            ]),
            instructor: new FormControl(null),
            category: new FormControl(null, Validators.required)
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

    handlerEvent($event: string): void {
        this.photoClients = $event;
    }

    doneAddClients(): void {
        this.clickAddButton = true;
        
        if (this.addClientsForm.valid) {
            const visitor: VisitorType = {
                fio: this.addClientsForm.get('name')?.value,
                birthday: this.addClientsForm.get('birthday')?.value,
                instructor: this.addClientsForm.get('instructor')?.value,
                skiPass: this.addClientsForm.get('numberSkiPasses')?.value,
                sport: this.addClientsForm.get('category')?.value,
                photo: this.photoClients
            };
            this.dialogRef.close(visitor);
        }
    }

    checkEmpty(param: string): boolean {
        return this.addClientsForm.get(param)?.value === null || this.addClientsForm.get(param)?.value === '';
    }

    checkLen(param: string): boolean {
        return `${this.addClientsForm.get(param)?.value}`.length !== 16;
    }

    // checkSkiPass(skiPass:number){

    // }




}

