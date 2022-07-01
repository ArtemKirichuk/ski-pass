import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
        SharedModule
    ]
})
export class MainPageModule { }
