import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { UserType } from 'src/app/types/types';

@Component({
    selector: 'app-edit-profile',
    templateUrl: './edit-profile.component.html',
    styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent {

    editProfileGroup : FormGroup;
    user$ : Subject<UserType> = new Subject();
    constructor(public dialogRef: MatDialogRef<EditProfileComponent>, @Inject(MAT_DIALOG_DATA) public data: {user:UserType}) { 
        this.user$.next(data.user);
        this.editProfileGroup = new FormGroup({
            url: new FormControl(),
            description: new FormControl(null),
            dateDeadline: new FormControl(null, [Validators.required]),
            priority:new FormControl(null, Validators.required),
            category:new FormControl(null)
        });

    }


}
