import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserType } from '../shared/interfaces';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    form: FormGroup;

    PERSONAL_ACCOUNT_TEXT = 'Личный кабинет';
    SKI_RESRORT_TEXT = 'горнолыжного курорта';
    NAME = 'Имя';
    PASSWORD = 'Пароль';
    LOGIN = 'Войти';
    REGISTRATION = 'Зарегистрироваться';
    COPYRIGHT = '(с) 2021. Все права защещины';
    ERRORS = 'Введите имя и пароль';
    ERROR_LOGIN = 'Введите имя';
    ERROR_PASSWORD = 'Введите пароль';

    constructor(private userService: UserService,
                private router: Router) { 
        this.form = new FormGroup({
            login: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    submit(): void {
        const login = this.form.get('login')?.value;
        const password = this.form.get('password')?.value;

        const user: UserType = {
            name: login,
            surname: '',
            password: password,
            photo: ''
        };

        this.userService.createUser(user).subscribe(val => {
            if (val) {
                this.router.navigate(['']);
            }
            else {
                alert('Не удалось создать пользователя');
            }
        });
    }
}
