import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'app-add-new-clients',
    templateUrl: './add-new-clients.component.html',
    styleUrls: ['./add-new-clients.component.scss']
})
export class AddNewClientsComponent {
    TITLE  = 'Добавить нового посетителя';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    IMG_DATEPICKER = '../../assets/images/datepicker.svg';
    NAME = 'ФИО';
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
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

    constructor(private dialogRef:MatDialogRef<AddNewClientsComponent>, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
       
        iconRegistry.addSvgIcon('datepicker', sanitizer.bypassSecurityTrustResourceUrl(this.IMG_DATEPICKER)); 
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
            this.dialogRef.close();
        }
    }

    handlerEvent($event:string):void{
        this.photoClients = $event;
    }


    doneAddClients():void{
        this.clickAddButton = true;
    }


    checkName():boolean{
        return this.addClientsForm.get('name')?.value === null && this.clickAddButton;
    }

    
}

