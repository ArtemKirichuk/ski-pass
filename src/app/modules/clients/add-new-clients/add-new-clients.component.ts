import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocomplete, MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { MatDialogRef } from '@angular/material/dialog';
import { VisitorType } from 'src/app/types/types';


@Component({
    selector: 'app-add-new-clients',
    templateUrl: './add-new-clients.component.html',
    styleUrls: ['./add-new-clients.component.scss']
})
export class AddNewClientsComponent {
    TITLE  = 'Добавить нового посетителя';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    NAME = 'ФИО';
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
    ERROR_SKI_PASS_LEN = 'Ски-пасс должен быть 16-символьным'; 
    ERROR_SKI_PASS_NOT_FOUND = 'Такого ски-пасса не существует'; 
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
    ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить день рождения';
    BIRTHDAY = 'День рождения';
    NUMBER = 'Номер ски-пасса';
    NUMBER_TYPE = 'number';
    TEXT_TYPE = 'text';
    INSTRUCTOR = 'Назначить тренера';
    SPORT = 'Вид спорта';
    BUTTON_ADD = 'Добавить';
    value='';
    clickAddButton  = false;
    photoClients : string = this.DEFAULT_IMG;

    addClientsForm : FormGroup;
    @ViewChild(MatAutocompleteTrigger) autocomplete!: MatAutocompleteTrigger;
    constructor(private dialogRef:MatDialogRef<AddNewClientsComponent>) {
       
        this.addClientsForm = new FormGroup({
            name: new FormControl(null, Validators.required),
            birthday: new FormControl(null, Validators.required),
            numberSkiPasses: new FormControl(null, [
                Validators.required,
                Validators.minLength(16),
                Validators.maxLength(16)]),
            instructor : new FormControl(null),
            category : new FormControl(null, Validators.required)
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


    doneAddClients():void{
        this.clickAddButton = true;
        if(this.addClientsForm.valid){
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


    checkEmpty(param: string):boolean{
        return this.addClientsForm.get(param)?.value === null || this.addClientsForm.get(param)?.value === '';
    }

    checkLen(param:string):boolean{
        return `${this.addClientsForm.get(param)?.value}`.length !== 16;
    }

    // checkSkiPass(skiPass:number){

    // }
    openAutoCompleteMenu() {
        this.autocomplete.openPanel()
      }


    
}

