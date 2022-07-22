import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditClientsComponent } from './edit-clients.component';
import { TitleModalFormModule } from '../../shared/title-modal-form/title-modal-form.module';
import { PhotoFormModule } from '../../shared/photo-form/photo-form.module';
import { InputModule } from '../../shared/input/input.module';
import { ButtonModule } from '../../shared/button/button.module';
import { DatepickerModule } from '../../shared/datepicker/datepicker.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SimpleSelectModule } from '../../shared/simple-select/simple-select.module';

@NgModule({
    declarations: [
        EditClientsComponent
    ],
    imports: [
        CommonModule,
        TitleModalFormModule,
        PhotoFormModule,
        InputModule,
        ButtonModule,
        DatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        SimpleSelectModule
    ],
    exports:[
        EditClientsComponent
    ]
})
export class EditClientsModule { }
