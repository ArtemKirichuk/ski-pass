import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewClientsComponent } from './add-new-clients.component';
import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [AddNewClientsComponent],
    imports: [
        CommonModule,
        TitleModalFormModule,
        PhotoFormModule,
        ButtonModule,
        InputModule,
        ReactiveFormsModule
    ],
    exports:[
        AddNewClientsComponent
    ]
})
export class AddNewClientsModule { }
