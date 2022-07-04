import { Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/types/types';


@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnDestroy{

    TITLE  = 'Личный кабинет администратора';
    OK  = 'OK';
    IMG_NOT_FOUND  = 'Изображение не найдено';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    editProfileGroup : FormGroup;
    user$ : BehaviorSubject<UserType> = new BehaviorSubject({} as UserType);
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(public dialogRef: MatDialogRef<EditProfileComponent>, public userService:UserService) { 
        const user = this.userService.currentUser$.value;
        if(!user.photo)
            user.photo = this.DEFAULT_IMG;
        this.editProfileGroup = new FormGroup({
            url: new FormControl(user.photo),
            name: new FormControl(user.name, Validators.required),
            surname:new FormControl(user.surname, Validators.required)
        });
        console.log('tut');
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    doneEditProfile() : void{
        const formValue = this.editProfileGroup.getRawValue();
        const user = this.userService.currentUser$.value;
        if(formValue.url && formValue.url!=this.DEFAULT_IMG){
            user.photo = formValue.url;
        }
        if(formValue.surname){
            user.surname = formValue.surname;
        }
        if(formValue.name){
            user.name = formValue.name;
            this.userService.changeUser(user)
                .pipe(takeUntil(this.destroy$))
                .subscribe(val=>{
                    if(val){
                        this.userService.currentUser$.next(user);
                    }
                });
        }
        
    }


}
