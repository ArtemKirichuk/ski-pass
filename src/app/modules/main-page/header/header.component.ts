import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { EditProfileComponent } from 'src/app/modules/main-page/header/edit-profile/edit-profile.component';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
    SEARCH  = 'Поиск';
    EXIT  = 'Выход';
    SKI_RESORT  = 'Горнолыжный курорт';
    CLIENTS = 'Посетители';
    INSTRUCTORS = 'Инструкторы';
    SKI_PASSES = 'Ски-пассы';
    ADMIN_MODE = 'Режим администратора';
    SETTINGS = 'Настройки';
    IMG_SETTING = '../../assets/images/setting.svg';
    COPYRIGHT = 'Все права защищены';
    searchForm = new FormControl('');
    destroy$ : Subject<boolean> = new Subject<boolean>();
    
    constructor(private userService:UserService, private router : Router, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog : MatDialog){
        iconRegistry.addSvgIcon('setting', sanitizer.bypassSecurityTrustResourceUrl(this.IMG_SETTING));
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

    logOut():void{
        this.userService.singOut()
        .pipe(takeUntil(this.destroy$))
        .subscribe(result =>{
            if(result){
                this.router.navigate(['/autorization']);
            }
        });
        
    }

    routingMainPage():void{
        this.router.navigate(['']);
    }

    routerClients():void{
        this.router.navigate(['/clients']);
    }

    routerInstructors():void{
        this.router.navigate(['/instructors']);
    }

    routerSkiPasses():void{
        this.router.navigate(['/ski-passes']);
    }

    editProfile() : void{
        this.dialog.open(EditProfileComponent, {width:'35%'});
    }

}
