import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/modules/shared/button/button.module';
import { RegistrationComponent } from './registration.component';


@NgModule({
    declarations: [
        RegistrationComponent
    ],
    exports: [
        RegistrationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'', component: RegistrationComponent}]),
        ReactiveFormsModule,
        ButtonModule
    ]
})
export class RegistrationModule { }
