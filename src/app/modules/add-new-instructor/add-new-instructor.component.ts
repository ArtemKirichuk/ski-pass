import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { InstructorType } from 'src/app/types/types';
import { AddNewClientsComponent } from '../add-new-clients/add-new-clients.component';

@Component({
    selector: 'app-add-new-instructor',
    templateUrl: './add-new-instructor.component.html',
    styleUrls: ['./add-new-instructor.component.scss']
})
export class AddNewInstructorComponent{
    TITLE  = 'Добавить нового инструктора';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
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
    BUTTON_ADD = 'Добавить';
    photoInstructor : string = this.DEFAULT_IMG;

    addInstructorForm : FormGroup;
  

    constructor(private dialogRef:MatDialogRef<AddNewClientsComponent>, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
      
        this.addInstructorForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            birthday: new FormControl(null, Validators.required),
            startWork: new FormControl(null, Validators.required),
            sex: new FormControl(null, Validators.required),
            client : new FormControl(null),
            category : new FormControl(null, Validators.required)
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

    doneAddInstructor(){
        const formValue = this.addInstructorForm.getRawValue();
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
