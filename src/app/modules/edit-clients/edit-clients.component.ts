import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { VisitorType } from '../shared/interfaces';


@Component({
    selector: 'app-edit-clients',
    templateUrl: './edit-clients.component.html',
    styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent {
    TITLE = 'Редактировать профиль пользователя';
    NAME = 'ФИО';
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
    ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить дату рождения';
    ERROR_SKI_PASS_LEN = 'Ски-пасс должен быть 16-символьным'; 
    ERROR_SKI_PASS_NOT_FOUND = 'Такого ски-пасса не существует'; 
    BIRTHDAY = 'День рождения';
    NUMBER = 'Номер ски-пасса';
    NUMBER_TYPE = 'number';
    TEXT_TYPE = 'text';
    INSTRUCTOR = 'Назначить тренера';
    SPORT = 'Вид спорта';
    BUTTON_EDIT = 'Редактировать';

    editClientsForm : FormGroup;
    photoClients : string;
    clickEditButton = false;

    constructor(@Inject(MAT_DIALOG_DATA) public data: {clients : VisitorType, width : string}, 
    private dialogRef: MatDialogRef<EditClientsComponent>) {
        console.log(data.clients);
        this.photoClients = data.clients.photo;
        this.editClientsForm = new FormGroup({
            name : new FormControl(data.clients.fio, Validators.required),
            birthday : new FormControl(data.clients.birthday, Validators.required),
            numberSkiPasses : new FormControl(data.clients.skiPass, Validators.required),
            instructor : new FormControl(data.clients.instructor),
            sport : new FormControl(data.clients.sport, Validators.required)
        });
    }


    handlerClose($event:boolean):void{
        if($event){
            this.dialogRef.close(null);
        }
    }

    handlerEvent($event:string):void{
        this.photoClients = $event;
    }

    editClients(){
        this.clickEditButton = true;
        if(this.editClientsForm.valid){
            const formValue = this.editClientsForm.getRawValue();
            const clients : VisitorType = {
                photo : this.photoClients,
                fio : formValue.name,
                birthday : formValue.birthday,
                instructor : formValue.instructor,
                skiPass : formValue.numberSkiPasses,
                sport : formValue.sport
            };
            this.dialogRef.close(clients); 
        }
    }

    checkEmpty(param: string):boolean{
        return this.editClientsForm.get(param)?.value === null || this.editClientsForm.get(param)?.value === '';
    }

    checkLen(param:string):boolean{
        return `${this.editClientsForm.get(param)?.value}`.length !== 16;
    }

}
