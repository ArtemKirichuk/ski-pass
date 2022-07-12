import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
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

  searchForm = new FormControl('');
    
  constructor(private userService:UserService, private router : Router){

  }

  logOut():void{
      this.userService.singOut();
      this.router.navigate(['/autorization']);
  }

  routingMainPage():void{
      this.router.navigate(['']);
  }

}
