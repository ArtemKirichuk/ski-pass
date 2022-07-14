import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ButtonModule } from '../../shared/button/button.module';
import { DatepickerModule } from '../../datepicker/datepicker.module';
import { InputModule } from '../../shared/input/input.module';
import { PhotoFormModule } from '../../photo-form/photo-form.module';
import { SelectModule } from '../../select/select.module';
import { TitleModalFormModule } from '../../shared/title-modal-form/title-modal-form.module';
import { AddNewClientsComponent } from './add-new-clients.component';



@NgModule({
    declarations: [
        AddNewClientsComponent
    ],
    imports: [
        CommonModule,
        TitleModalFormModule,
        PhotoFormModule,
        ButtonModule,
        InputModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        MatInputModule,
        DatepickerModule,
        MatButtonModule,
        SelectModule
    ],
    exports:[
        AddNewClientsComponent
    ]
})
export class AddNewClientsModule { }
