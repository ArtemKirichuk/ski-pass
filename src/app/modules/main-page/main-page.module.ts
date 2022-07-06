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
import { PersonCardModule } from '../person-card/person-card.module';
import { ReadProfileUserComponent } from 'src/app/components/read-profile-user/read-profile-user.component';
import { InputModule } from '../input/input.module';


@NgModule({
    declarations: [
        MainPageComponent,
        UserInfoComponent,
        EditProfileComponent,
        ClientsMiniComponent,
        ReadProfileUserComponent
    ],
    exports: [
        MainPageComponent,
        UserInfoComponent,
        ReadProfileUserComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule.forChild([{path:'', component: MainPageComponent}]),
        ButtonModule,
        PersonCardModule,
        InputModule
    ]
})
export class MainPageModule { }
