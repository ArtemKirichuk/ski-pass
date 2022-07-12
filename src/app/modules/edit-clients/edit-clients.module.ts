import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClientsComponent } from './edit-clients.component';
import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { SelectModule } from '../select/select.module';
import { InputModule } from '../input/input.module';
import { ButtonModule } from '../button/button.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [
        EditClientsComponent
    ],
    imports: [
        CommonModule,
        TitleModalFormModule,
        PhotoFormModule,
        SelectModule,
        InputModule,
        ButtonModule,
        DatepickerModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        EditClientsComponent
    ]
})
export class EditClientsModule { }
