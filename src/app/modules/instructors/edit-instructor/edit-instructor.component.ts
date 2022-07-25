import { Component, Inject, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { map, Observable, Subject, takeUntil } from 'rxjs';
import { VisitorService } from 'src/app/services/visitor.service';
import { InstructorType, PersonCardType, VisitorType } from '../../../types/types';
import { AgePipe } from '../../shared/age/age.pipe';
import { i18nErrors, i18nRU, srcAsset } from '../../shared/constants';

@Component({
    selector: 'app-edit-instructor',
    templateUrl: './edit-instructor.component.html',
    styleUrls: ['./edit-instructor.component.scss']
})
export class EditInstructorComponent implements OnDestroy {
    i18nRU = i18nRU;
    i18nErrors = i18nErrors;
    photoInstructor: string;
    editInstructorForm: FormGroup;
    clickCloseWindow = false;
    isCreate: boolean;
    gender = ['мужской', 'женский'];
    visiters = new Observable<PersonCardType[]>;
    destroy$: Subject<Boolean> = new Subject();
    get name() { return this.editInstructorForm.get('name'); }
    get birthday() { return this.editInstructorForm.get('birthday'); }
    get startWork() { return this.editInstructorForm.get('startWork'); }
    get sex() { return this.editInstructorForm.get('sex'); }
    get client() { return this.editInstructorForm.get('client'); }
    get category() { return this.editInstructorForm.get('category'); }
    constructor(
        private dialogRef: MatDialogRef<EditInstructorComponent>,
        @Inject(MAT_DIALOG_DATA) public instructor: InstructorType,
        visitorService: VisitorService
    ) {
        this.isCreate = false;
        if (!instructor) {
            this.isCreate = true;
            instructor = {} as InstructorType;
        }

        this.photoInstructor = instructor.photo ? instructor.photo : srcAsset.DEFAULT_IMG;
        this.editInstructorForm = new FormGroup({
            name: new FormControl(instructor.fio, Validators.required),
            birthday: new FormControl(instructor.birthday, Validators.required),
            startWork: new FormControl(instructor.startWork, Validators.required),
            sex: new FormControl(instructor.sex, Validators.required),
            client: new FormControl(instructor.visiter),
            category: new FormControl(instructor.category, Validators.required)
        });

        this.visiters = visitorService.getVisitors()
            .pipe(
                takeUntil(this.destroy$),
                map(this.getPersonData)
            )
    }
    getPersonData(visiters: VisitorType[]): PersonCardType[] {
        return visiters.map(visiter => {
            return {
                header: visiter.fio,
                title: AgePipe.prototype.transform(visiter.birthday),
                img: visiter.photo
            }
        })
    }
    handlerClose($event: boolean): void {
        if ($event) {
            this.dialogRef.close(null);
        }
    }

    handlerEvent($event: string): void {
        this.photoInstructor = $event;
    }

    doneEditInstructor() {
        this.clickCloseWindow = true;
        if (this.editInstructorForm.valid) {
            const formValue = this.editInstructorForm.getRawValue();
            const instructor: InstructorType = {
                fio: formValue.name,
                birthday: formValue.birthday,
                visiter: formValue.client,
                sex: formValue.sex,
                category: formValue.category,
                photo: this.photoInstructor,
                startWork: formValue.startWork
            };
            this.dialogRef.close(instructor);
        }
    }

    checkEmpty(param: string): boolean {
        return this.editInstructorForm.get(param)?.value === null || this.editInstructorForm.get(param)?.value === '';
    }
    ngOnDestroy(): void {
        this.destroy$.next(true)
    }
}
