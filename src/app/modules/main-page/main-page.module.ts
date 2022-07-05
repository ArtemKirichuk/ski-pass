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
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
import { ButtonAddModule } from '../button-add/button-add.module';
import { PersonCardModule } from '../person-card/person-card.module';


@NgModule({
    declarations: [
        MainPageComponent,
        UserInfoComponent,
        EditProfileComponent,
        ClientsMiniComponent
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
        ButtonModule,
        ButtonAddModule,
        PersonCardModule
    ]
})
export class MainPageModule { }
