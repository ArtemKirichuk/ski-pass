import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddNewClientsComponent } from '../../clients/add-new-clients/add-new-clients.component';
import { InstructorType } from '../../../types/types';

@Component({
    selector: 'app-edit-instructor',
    templateUrl: './edit-instructor.component.html',
    styleUrls: ['./edit-instructor.component.scss']
})
export class EditInstructorComponent {
    TITLE  = 'Редактировать профиль инструктора';
    NAME = 'ФИО';
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    ERROR_EMPTY_SEX = 'Необходимо выбрать пол';
    ERROR_EMPTY_CATEGORY = 'Необходимо заполнить категорию';
    ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить день рождения';
    ERROR_EMPTY_START_WORK = 'Необходимо заполнить день начала работы';
    BIRTHDAY = 'День рождения';
    START_WORK = 'День начала работы';
    SEX = 'Пол';
    CLIENT = 'Назначить посетителя';
    CATEGORY = 'Категория';
    BUTTON_EDIT = 'Редактировать';
    photoInstructor : string;

    editInstructorForm : FormGroup;
    clickCloseWindow  = false;


    constructor(private dialogRef:MatDialogRef<AddNewClientsComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: {instructor : InstructorType, width : string}) {
        this.photoInstructor = data.instructor.photo;
        this.editInstructorForm = new FormGroup({
            name: new FormControl(data.instructor.fio, Validators.required),
            birthday: new FormControl(data.instructor.birthday, Validators.required),
            startWork: new FormControl(data.instructor.startWork, Validators.required),
            sex: new FormControl(data.instructor.sex, Validators.required),
            client : new FormControl(data.instructor.visiter),
            category : new FormControl(data.instructor.category, Validators.required)
        });
    }

    handlerClose($event:boolean):void{
        if($event){
            this.dialogRef.close(null);
        }
    }

    handlerEvent($event:string):void{
        this.photoInstructor = $event;
    }

    doneEditInstructor(){
        this.clickCloseWindow = true;
        if(this.editInstructorForm.valid){
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

    checkEmpty(param: string):boolean{
        return this.editInstructorForm.get(param)?.value === null || this.editInstructorForm.get(param)?.value === '';
    }

}
