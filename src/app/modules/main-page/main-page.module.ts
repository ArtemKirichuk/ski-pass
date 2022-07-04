import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { ButtonModule } from '../button/button.module';
import { MainPageComponent } from './main-page.component';


@NgModule({
    declarations: [
        MainPageComponent,
        UserInfoComponent,
        EditProfileComponent
    ],
    exports: [
        MainPageComponent,
        UserInfoComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule.forChild([{path:'', component: MainPageComponent}]),
        ButtonModule
    ]
})
export class MainPageModule { }
