import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserType } from '../../types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent {
    USER_NAME  = 'Ольга';
    USER_SURNAME  = 'Терентьева';
    POST  = 'Администратор';
    URL  = '../../../assets/images/admin.png';
    PASSWORD  = '123456';
    constructor(public dialog:MatDialog) { }

    editProfile(){
        const user: UserType = {
            name:this.USER_NAME,
            surname:this.USER_SURNAME,
            password:this.PASSWORD,
            photo:this.URL
        };
        const dialogRef = this.dialog.open(EditProfileComponent, {data : user});
        dialogRef.afterClosed().subscribe(value => this.closeEditProfile.call(this,value));
    }
  
    closeEditProfile(value:UserType){
        value = {
            name:this.USER_NAME,
            surname:this.USER_SURNAME,
            password:this.PASSWORD,
            photo:this.URL
        };
    }
}
