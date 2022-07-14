import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InstructorCardModule } from '../instructors/instructor-card/instructor-card.module';
import { SelectComponent } from './select.component';

@NgModule({
    declarations: [
        SelectComponent
    ],
    exports: [
        SelectComponent
    ],
    imports: [
        InstructorCardModule,
        CommonModule,
        FormsModule
    ]
})
export class SelectModule {

}