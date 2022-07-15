import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserInfoComponent } from 'src/app/modules/main-page/header/user-info/user-info.component';
import { EditProfileComponent } from 'src/app/modules/main-page/header/edit-profile/edit-profile.component';
import { ReadProfileUserComponent } from 'src/app/modules/main-page/header/read-profile-user/read-profile-user.component';
import { TitleModalFormModule } from '../../shared/title-modal-form/title-modal-form.module';
import { InputModule } from '../../shared/input/input.module';
import { ButtonModule } from '../../shared/button/button.module';
import { PhotoFormModule } from '../../photo-form/photo-form.module';



@NgModule({
    declarations: [
        HeaderComponent,
        UserInfoComponent,
        EditProfileComponent,
        ReadProfileUserComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        ReactiveFormsModule,
        FormsModule,
        TitleModalFormModule,
        InputModule,
        ButtonModule,
        PhotoFormModule
    ],
    exports:[
        HeaderComponent,
        UserInfoComponent,
        EditProfileComponent,
        ReadProfileUserComponent
    ]
})
export class HeaderModule { }
