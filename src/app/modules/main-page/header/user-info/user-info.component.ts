import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { attribute, i18nRU, srcAsset } from 'src/app/modules/shared/constants';
import { UserService } from 'src/app/services/user.service';
import { UserType } from '../../../../types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { ReadProfileUserComponent } from '../read-profile-user/read-profile-user.component';

@Component({
    selector: 'app-user-info',
    templateUrl: './user-info.component.html',
    styleUrls: ['./user-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserInfoComponent {
    attribute = attribute;
    DEFAULT_IMG = srcAsset.DEFAULT_IMG;
    POST = i18nRU.POST
    destroy$: Subject<boolean> = new Subject<boolean>();
    currentUser$: BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);

    constructor(
        private userService: UserService,
        public dialog: MatDialog
    ) {

    }

    ngOnInit(): void {
        this.userService.currentUser$
            .pipe(takeUntil(this.destroy$))
            .subscribe(user => {
                this.currentUser$.next(user);
                if (!this.currentUser$.value.photo)
                    this.currentUser$.value.photo = this.DEFAULT_IMG;
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    editProfile(redirect?:boolean): void {
        // debugger
        const editDialog = this.dialog.open(EditProfileComponent, { width: attribute.widthDialog });

        editDialog.afterClosed().subscribe(() => {
            
            if (redirect) {
                this.readInfoProfile();
            }
        })
    }

    readInfoProfile(): void {
        const readDialog = this.dialog.open(ReadProfileUserComponent, { width: attribute.widthDialog });
        readDialog.afterClosed().subscribe((redirect) => {
            if (redirect) {
                this.editProfile( true )
            }

        })
    }

}
