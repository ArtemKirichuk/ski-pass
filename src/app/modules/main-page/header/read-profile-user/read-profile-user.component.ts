import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { attribute, i18nRU } from 'src/app/modules/shared/constants';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
    selector: 'app-read-profile-user',
    templateUrl: './read-profile-user.component.html',
    styleUrls: ['./read-profile-user.component.scss']
})
export class ReadProfileUserComponent implements OnInit, OnDestroy {

    i18nRU = i18nRU;
    user$: BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);
    destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(
        private userService: UserService,
         private dialog: MatDialog,
         private dialogRef: MatDialogRef<ReadProfileUserComponent>) { }

    ngOnInit(): void {
        this.userService.currentUser$
            .pipe(takeUntil(this.destroy$))
            .subscribe(val => {
                this.user$.next(val);
            });
    }

    // editProfile(): void {
    //     this.dialog.open(EditProfileComponent, { width: attribute.widthDialog });
    // }

    handlerClose($event: boolean): void {
        if ($event) {
            this.dialogRef.close();
        }
    }

    handlerEvent($event: string): void {
        const user = this.user$.value;
        user.photo = $event;
        this.user$.next(user);
    }
    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
