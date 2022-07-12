import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { VisitorType } from '../shared/interfaces';


@Component({
  selector: 'app-edit-clients',
  templateUrl: './edit-clients.component.html',
  styleUrls: ['./edit-clients.component.scss']
})
export class EditClientsComponent implements OnInit {
  TITLE = "Редактировать профиль пользователя";
  NAME = 'ФИО';
  ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
  ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
  ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
  ERROR_EMPTY_BIRTHDAY = 'Необходимо заполнить дату рождения';
  BIRTHDAY = 'День рождения';
  NUMBER = 'Номер ски-пасса';
  NUMBER_TYPE = 'number';
  TEXT_TYPE = 'text';
  INSTRUCTOR = 'Назначить тренера';
  SPORT = 'Вид спорта';
  BUTTON_EDIT = 'Редактировать';

  editClientsForm : FormGroup;
  photoClients : string;

  constructor(@Inject(MAT_DIALOG_DATA) private data: {clients : VisitorType}, 
    private dialogRef: MatDialogRef<EditClientsComponent>) {
      this.photoClients = data.clients.photo;
      this.editClientsForm = new FormGroup({
        name : new FormControl(data.clients.fio, Validators.required),
        birthday : new FormControl(data.clients.birthday, Validators.required),
        numberSkiPasses : new FormControl(data.clients.skiPass, Validators.required),
        instructor : new FormControl(data.clients.instructor),
        sport : new FormControl(data.clients.sport, Validators.required)
    });
    }

  ngOnInit(): void {
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
    const formValue = this.editClientsForm.getRawValue();
    const clients = {} as VisitorType;
    clients.photo = this.photoClients;
    clients.fio = formValue.name;
    clients.birthday = formValue.birthday;
    clients.instructor = formValue.instructor;
    clients.skiPass = formValue.skiPass;
    clients.sport = formValue.sport;
    this.dialogRef.close(clients); 
  }

}
