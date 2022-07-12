import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditInstructorComponent } from './edit-instructor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputModule } from '../input/input.module';
import { SelectSexModule } from '../select-sex/select-sex.module';
import { SelectVisitorModule } from '../select-visitor/select-visitor.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { DatepickerModule } from '../datepicker/datepicker.module';
import { ButtonModule } from '../button/button.module';



@NgModule({
  declarations: [
    EditInstructorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    InputModule,
    SelectSexModule,
    SelectVisitorModule,
    PhotoFormModule,
    TitleModalFormModule,
    DatepickerModule,
    ButtonModule
  ],
  exports:[
    EditInstructorComponent
  ]
})
export class EditInstructorModule { }
