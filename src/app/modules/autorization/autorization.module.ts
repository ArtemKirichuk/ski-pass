import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/modules/shared/button/button.module';
import { AutorizationComponent } from './autorization.component';


@NgModule({
    declarations: [
        AutorizationComponent
    ],
    exports: [
        AutorizationComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'', component: AutorizationComponent}]),
        ButtonModule,
        ReactiveFormsModule
    ]
})
export class AutorizationModule { }
