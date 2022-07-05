import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { parseImg } from 'src/app/types/helper';
import { UserType } from 'src/app/types/types';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditProfileComponent implements OnDestroy{

    TITLE  = 'Личный кабинет администратора';
    OK  = 'OK';
    IMG_NOT_FOUND  = 'Изображение не найдено';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';
    ERROR_EMPTY_NAME = 'Необходимо заполнить имя';
    editProfileGroup : FormGroup;
    user$ : BehaviorSubject<UserType> = new BehaviorSubject({} as UserType);
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(public dialogRef: MatDialogRef<EditProfileComponent>, public userService:UserService) { 
        console.log(this.user$.value);
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
            this.userService.changeUser(this.user$.value)
                .pipe(takeUntil(this.destroy$))
                .subscribe(val=>{
                    if(val){
                        this.userService.currentUser$.next(this.user$.value);
                    }
                });
        }
        
    }

    clickEditPhoto() : void{
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = '.jpg, .jpeg, .png';
        input.onchange = e => { 

            this.getImageList(e); 
        };
        input.click();
    }

    getImageList(event : Event) : void{
        if(event){
            const target= event.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];
            if(!file || file.size === 0) {
                alert('You must select an image');
                return;
            }
            
            const mimeType = file.type;
            
            if (mimeType.match(/image\/*/) == null) {
                alert('Only images are supported');
                return;
            }
            
            
            parseImg(file, 'URL', (res : string) => {
                if(res.split(' ').length != 0){
                    res = res.split(' ')[0];
                }
                
                //this.editProfileGroup.patchValue({url:res.toString()});
                const user = this.user$.value;
                user.photo = res;
                this.user$.next(user);
            });
        }
        
    }


}
