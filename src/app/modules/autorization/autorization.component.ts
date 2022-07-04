import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

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
    COPYRIGHT = '(с) 2021. Все права защищены';
    ERROR_LOGIN = 'Введите имя';
    ERROR_PASSWORD = 'Введите пароль';

    constructor(private userService: UserService,
                private router: Router) { 
        this.form = new FormGroup({
            login: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    submit() {
        const login: string = this.form.get('login')?.value;
        const password: string = this.form.get('password')?.value;

        this.userService.getUsers().subscribe(resp => {
            const user = resp.find( el => el.name === login && el.password === password );
            if (user) {
                
                this.userService.singIn(user).subscribe(val => {
                    if (val) {
                        this.userService.sendUser$(user);  
                        this.router.navigate(['']);
                    }
                });
                
            }
            else {
                alert('Проверьте правильность логина и пароля');
            }
        });
    }
}
