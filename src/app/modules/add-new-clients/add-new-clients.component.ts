import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-add-new-clients',
    templateUrl: './add-new-clients.component.html',
    styleUrls: ['./add-new-clients.component.scss']
})
export class AddNewClientsComponent implements OnInit, OnDestroy {
    TITLE  = 'Добавить нового посетителя';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    NAME = 'ФИО';
    ERROR_EMPTY_NAME = 'Необходимо заполнить ФИО';
    ERROR_EMPTY_NUMBER = 'Необходимо заполнить номер ски-пасса';
    ERROR_EMPTY_SPORT = 'Необходимо заполнить вид спорта';
    BIRTHDAY = 'День рождения';
    NUMBER = 'Номер ски-пасса';
    NUMBER_TYPE = 'number';
    INSTRUCTOR = 'Назначить тренера';
    SPORT = 'Вид спорта';
    BUTTON_ADD = 'Добавить';

    addClientsForm : FormGroup;
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private dialogRef:MatDialogRef<AddNewClientsComponent>) { 
        this.addClientsForm = new FormGroup({
            photo : new FormControl(null),
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

    ngOnInit(): void {
        
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    handlerClose($event:boolean):void{
        if($event){
            this.dialogRef.close();
        }
    }

    handlerEvent($event:string):void{
        this.addClientsForm.patchValue({photo:$event});
    }

    checkEmptyName():boolean{
        const formValue = this.addClientsForm.getRawValue();
        return formValue.name === ''; 
    }

    checkEmptyNumber():boolean{
        const formValue = this.addClientsForm.getRawValue();
        return formValue.numberSkiPasses === ''; 
    }

    checkEmptyCategory():boolean{
        const formValue = this.addClientsForm.getRawValue();
        return formValue.category === ''; 
    }

    doneAddClients():void{
        
    }
}
