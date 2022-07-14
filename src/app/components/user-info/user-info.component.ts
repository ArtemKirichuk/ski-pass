import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserType } from '../../types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ReadProfileUserComponent } from '../read-profile-user/read-profile-user.component';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent {
    POST  = 'Администратор';
    PASSWORD  = '123456';
    DEFAULT_IMG  = '../../../assets/images/default-photo.svg';

    destroy$: Subject<boolean> = new Subject<boolean>();
   
    currentUser$ : BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);
    
    constructor(private userService:UserService, public dialog:MatDialog){

    }

    ngOnInit(): void {
        this.userService.currentUser$
            .pipe(takeUntil(this.destroy$))
            .subscribe( user =>{
                this.currentUser$.next(user);
                if(!this.currentUser$.value.photo)
                    this.currentUser$.value.photo = this.DEFAULT_IMG;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }


    editProfile() : void{
        this.dialog.open(EditProfileComponent, {width:'35%'});
    }

    readInfoProfile() : void{
        this.dialog.open(ReadProfileUserComponent, {width:'35%'});
    }
  
}
