import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/types/types';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';

@Component({
  selector: 'app-read-profile-user',
  templateUrl: './read-profile-user.component.html',
  styleUrls: ['./read-profile-user.component.scss']
})
export class ReadProfileUserComponent implements OnInit, OnDestroy {

  TITLE : string = "Личный кабинет администратора";
  POST  : string = 'Администратор';
  OK : string = 'OK';

  user$ : BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private userService: UserService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.currentUser$
    .pipe(takeUntil(this.destroy$))
    .subscribe(val =>{
      this.user$.next(val);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  editProfile() : void{
    this.dialog.open(EditProfileComponent, {width:'35%'});
  }

}
