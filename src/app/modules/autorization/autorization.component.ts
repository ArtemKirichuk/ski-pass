import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { attribute, i18nErrors, i18nRU, srcAsset } from '../shared/constants';

@Component({
    selector: 'app-autorization',
    templateUrl: './autorization.component.html',
    styleUrls: ['./autorization.component.scss']
})
export class AutorizationComponent {
    form: FormGroup;
    i18nRU = i18nRU;
    i18nErrors = i18nErrors;
    srcAsset = srcAsset;
    attribute = attribute;
    icons = [srcAsset.googleIcon,srcAsset.facebookIcon,srcAsset.vkIcon]
        
    

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
            const user = resp.find(el => el.name === login && el.password === password);
            if (user) {

                this.userService.singIn(user).subscribe(val => {
                    if (val) {
                        this.userService.sendUser$(user);
                        this.router.navigate(['']);
                    }
                });

            }
            else {
                alert(i18nErrors.ERROR_LOGIN_PASSWORD);
            }
        });
    }
}
