import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserType } from '../../types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent {
    POST  = 'Администратор';
    PASSWORD  = '123456';
    
    destroy$: Subject<boolean> = new Subject<boolean>();
   
    currentUser$ : BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);
    
    constructor(private userService:UserService, public dialog:MatDialog){

    }

    ngOnInit(): void {
        this.userService.currentUser$
            .pipe(takeUntil(this.destroy$))
            .subscribe( user =>{
                this.currentUser$.next(user);
                console.log('tut', user);
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }


    editProfile(){
        const dialogRef = this.dialog.open(EditProfileComponent, {height:'65%', width:'35%'});
    }
  
}
