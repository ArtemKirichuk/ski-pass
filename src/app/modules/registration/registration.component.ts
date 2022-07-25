import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserType } from 'src/app/types/types';
import { i18nErrors, i18nRU, srcAsset } from '../shared/constants';


@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

    form: FormGroup;
    icons = [srcAsset.googleIcon,srcAsset.facebookIcon,srcAsset.vkIcon];
    i18nRu=i18nRU;
    i18nErrors=i18nErrors;
    srcAsset = srcAsset;
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
                this.userService.sendUser$(user);
                this.router.navigate(['']);
            }
            else {
                alert('Не удалось создать пользователя');
            }
        });
    }
}
