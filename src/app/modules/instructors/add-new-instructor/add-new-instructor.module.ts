import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/button/button.module';
import { DatepickerModule } from '../../shared/datepicker/datepicker.module';
import { InputModule } from '../../shared/input/input.module';
import { PhotoFormModule } from '../../photo-form/photo-form.module';
import { SelectSexModule } from '../../select-sex/select-sex.module';
import { SelectVisitorModule } from '../../select-visitor/select-visitor.module';
import { SelectModule } from '../../select/select.module';
import { TitleModalFormModule } from '../../shared/title-modal-form/title-modal-form.module';
import { AddNewInstructorComponent } from './add-new-instructor.component';



@NgModule({
    declarations: [
        AddNewInstructorComponent
    ],
    imports: [
        CommonModule,
        TitleModalFormModule,
        PhotoFormModule,
        InputModule,
        SelectModule,
        DatepickerModule,
        FormsModule,
        ReactiveFormsModule,
        ButtonModule,
        SelectVisitorModule,
        SelectSexModule
    ],
    exports: [
        AddNewInstructorComponent
    ]
})
export class AddNewInstructorModule { }
