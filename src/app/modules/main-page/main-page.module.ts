import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
import { EditProfileComponent } from 'src/app/components/edit-profile/edit-profile.component';
import { ReadProfileUserComponent } from 'src/app/components/read-profile-user/read-profile-user.component';
import { UserInfoComponent } from 'src/app/components/user-info/user-info.component';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { MainPageComponent } from './main-page.component';


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
        InputModule,
        PhotoFormModule,
        TitleModalFormModule
    ]
})
export class MainPageModule { }
