import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { map, Observable, Subject, takeUntil } from 'rxjs';
import { InstuctorService } from 'src/app/services/instuctor.service';
import { SkipassService } from 'src/app/services/skipass.service';
import { VisitorType, PersonCardType, InstructorType } from 'src/app/types/types';
import { AgePipe } from '../../shared/age/age.pipe';
import { attribute, i18nErrors, i18nRU, srcAsset } from '../../shared/constants';



@Component({
    selector: 'app-edit-clients',
    templateUrl: './edit-clients.component.html',
    styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnDestroy{
    
    i18nRU = i18nRU;
    i18nErrors = i18nErrors;
    attribute = attribute;
    editClientsForm: FormGroup;
    photoClients: string;
    clickEditButton = false;
    isCreate: boolean;
    skipasses: string[] = [];
    instructors = new Observable<PersonCardType[]>;
    destroy$: Subject<boolean> = new Subject();
    get name() { return this.editClientsForm.get('name'); }
    get birthday() { return this.editClientsForm.get('birthday'); }
    get numberSkiPasses() { return this.editClientsForm.get('numberSkiPasses'); }
    get instructor() { return this.editClientsForm.get('instructor'); }
    get sport() { return this.editClientsForm.get('sport'); }
    constructor(
        private skipassService: SkipassService,
        @Inject(MAT_DIALOG_DATA) public visiterData: VisitorType,
        private dialogRef: MatDialogRef<EditClientsComponent>,
        private instuctorService: InstuctorService
    ) {
        this.isCreate = false;
        if (!visiterData) {
            this.isCreate = true;
            visiterData = {} as VisitorType;
        }
        this.photoClients = visiterData.photo ? visiterData.photo : srcAsset.DEFAULT_IMG;
        this.editClientsForm = new FormGroup({
            name: new FormControl(visiterData?.fio, Validators.required),
            birthday: new FormControl(visiterData?.birthday, Validators.required),
            numberSkiPasses: new FormControl(visiterData?.skiPass, Validators.required),
            instructor: new FormControl(visiterData?.instructor, Validators.required),
            sport: new FormControl(visiterData?.sport, Validators.required)
        });
        this.skipassService.get()
            .pipe(takeUntil(this.destroy$))
            .subscribe((skipass) => {
                this.skipasses = skipass.map(e => String(e.cardNumber))
            })
        this.instructors = this.instuctorService.getInstructors()
            .pipe(
                takeUntil(this.destroy$),
                map(this.getPersonData)
            )
    }
    getPersonData(instructors: InstructorType[]): PersonCardType[] {
        return instructors.map(instructor => {
            return {
                header: instructor.fio,
                title: instructor.category + i18nRU.EXPERIENCE + AgePipe.prototype.transform(instructor.startWork),
                img: instructor.photo
            }
        })
    }
    error(name: string): boolean {
        const erros = this.editClientsForm.get(name)?.errors;
        return erros ? true : false;
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
    ngOnDestroy(): void {
        this.destroy$.next(true)
    }

}
