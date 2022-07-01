import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent{

    SEARCH  = 'Поиск';
    EXIT  = 'Выход';
    SKI_RESORT  = 'Горнолыжный курорт';

    searchForm = new FormControl('');
    

}
