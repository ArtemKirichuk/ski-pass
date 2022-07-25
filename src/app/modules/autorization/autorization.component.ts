import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserType } from 'src/app/types/types';
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
    icons = [srcAsset.googleIcon, srcAsset.facebookIcon, srcAsset.vkIcon]



    constructor(
        private userService: UserService,
        private router: Router
    ) {
        this.form = new FormGroup({
            name: new FormControl(null, Validators.required),
            password: new FormControl(null, Validators.required)
        });
    }

    submit(): void {

        let user = {} as UserType
        user = Object.assign(user, this.form.value);
        this.userService.singIn(user).subscribe(authUser => {
            if (authUser) {
                this.userService.sendUser$(authUser);
                this.router.navigate(['']);
            }
            else {
                alert(i18nErrors.ERROR_LOGIN_PASSWORD);
            }
        });


    }
}
