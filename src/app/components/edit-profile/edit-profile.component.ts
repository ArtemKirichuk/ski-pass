import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { KeyUserType, updateType, UserType } from 'src/app/types/types';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
    
})
export class EditProfileComponent implements OnDestroy, OnInit{

    TITLE  = 'Личный кабинет администратора';
    OK  = 'OK';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    ERROR_EMPTY_NAME = 'Необходимо заполнить имя';
    NAME  = 'Имя';
    SURNAME  = 'Фамилия';
    editProfileGroup : FormGroup = {} as FormGroup;
    user$ : BehaviorSubject<UserType> = new BehaviorSubject({} as UserType);
    destroy$: Subject<boolean> = new Subject<boolean>();
    userKey = '';

    constructor(public dialogRef: MatDialogRef<EditProfileComponent>, public userService:UserService) { 
                
    }

    ngOnInit(): void {
        this.userService.currentUser$
            .pipe(takeUntil(this.destroy$))
            .subscribe(value=>{
                this.user$.next(value);
            });
        if(!this.user$.value.photo)
            this.user$.value.photo = this.DEFAULT_IMG;
        
        this.editProfileGroup = new FormGroup({
            name: new FormControl(this.user$.value.name, Validators.required),
            surname:new FormControl(this.user$.value.surname)
        });

        this.userKey = this.user$.value.name;
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    checkEmptyName():boolean{
        const formValue = this.editProfileGroup.getRawValue();
        return formValue.name === ''; 
    }

    doneEditProfile() : void{
        const formValue = this.editProfileGroup.getRawValue();
        
        if(this.user$.value.photo==this.DEFAULT_IMG){
            this.user$.value.photo='';
        }
        if(formValue.surname){
            this.user$.value.surname = formValue.surname;
        }
        if(formValue.name){
            this.user$.value.name = formValue.name;
            const update: updateType<KeyUserType, UserType> = {
                oldKey: {name: this.userKey},
                newRow: this.user$.value
            };

            this.userService.changeUser(update)
                .pipe(takeUntil(this.destroy$))
                .subscribe(val=>{
                    if(val){
                        this.userService.currentUser$.next(this.user$.value);
                    }
                    
                });
        }
        
    }


    handlerEvent($event:string):void{
        const user = this.user$.value;
        user.photo = $event;
        this.user$.next(user);
    }

    handlerClose($event:boolean):void{
        if($event){
            this.dialogRef.close();
        }
    }


}
