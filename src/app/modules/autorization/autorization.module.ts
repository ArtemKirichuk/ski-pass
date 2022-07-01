import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
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
        SharedModule,
        RouterModule.forChild([{path:'', component: AutorizationComponent}])
    ]
})
export class AutorizationModule { }
