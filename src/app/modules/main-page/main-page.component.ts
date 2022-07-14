import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { i18n } from 'src/app/modules/shared/helper';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent extends i18n{

    SEARCH  = 'Поиск';
    EXIT  = 'Выход';
    SKI_RESORT  = 'Горнолыжный курорт';
    
    searchForm = new FormControl('');
    
    constructor(private userService:UserService, private router : Router){
        super()
    }

    logOut():void{
        this.userService.singOut();
        this.router.navigate(['/autorization']);
    }

    routingMainPage():void{
        this.router.navigate(['']);
    }
}
