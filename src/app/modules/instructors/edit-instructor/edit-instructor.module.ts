import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInstructorComponent } from './edit-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../../shared/input/input.module';
import { SelectVisitorModule } from '../../select-visitor/select-visitor.module';
import { PhotoFormModule } from '../../shared/photo-form/photo-form.module';
import { TitleModalFormModule } from '../../shared/title-modal-form/title-modal-form.module';
import { DatepickerModule } from '../../shared/datepicker/datepicker.module';
import { ButtonModule } from '../../shared/button/button.module';
import { SimpleSelectModule } from '../../shared/simple-select/simple-select.module';



@NgModule({
    declarations: [
        EditInstructorComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        InputModule,
        SelectVisitorModule,
        PhotoFormModule,
        TitleModalFormModule,
        DatepickerModule,
        ButtonModule,
        SimpleSelectModule
    ],
    exports:[
        EditInstructorComponent
    ]
})
export class EditInstructorModule { }
