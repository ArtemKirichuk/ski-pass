import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
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
        SharedModule,
        RouterModule.forChild([{path:'', component: RegistrationComponent}])
    ]
})
export class RegistrationModule { }
