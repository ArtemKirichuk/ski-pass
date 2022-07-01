import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './main-page.component';



@NgModule({
    declarations: [
        MainPageComponent,
        UserInfoComponent
    ],
    exports: [
        MainPageComponent,
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{path:'', component: MainPageComponent}])
    ]
})
export class MainPageModule { }
