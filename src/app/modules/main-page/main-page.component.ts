import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

    
    
    searchForm = new FormControl('');
    
    constructor(private userService:UserService, private router : Router){ }

    logOut():void{
        this.userService.singOut();
        this.router.navigate(['/autorization']);
    }

    routingMainPage():void{
        this.router.navigate(['']);
    }
}
