import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonCardModule } from '../person-card/person-card.module';
import { SelectInstructorComponent } from './select-instructor.component';

@NgModule({
    declarations: [
        SelectInstructorComponent
    ],
    exports: [
        SelectInstructorComponent
    ],
    imports: [
        PersonCardModule,
        CommonModule,
        FormsModule
    ]
})
export class SelectInstructorModule {

}