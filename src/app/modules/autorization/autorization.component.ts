import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-autorization',
    templateUrl: './autorization.component.html',
    styleUrls: ['./autorization.component.scss']
})
export class AutorizationComponent {
    form: FormGroup;

    PERSONAL_ACCOUNT_TEXT = 'Личный кабинет';
    SKI_RESRORT_TEXT = 'горнолыжного курорта';
    NAME = 'Имя';
    PASSWORD = 'Пароль';
    LOGIN = 'Войти';
    REGISTRATION = 'Зарегистрироваться';
    COPYRIGHT = '(с) 2021. Все права защещины';

    constructor() { 
        this.form = new FormGroup({
            login: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }
}
