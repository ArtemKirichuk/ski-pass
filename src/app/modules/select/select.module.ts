import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InstructorCardModule } from '../instructor-card/instructor-card.module';
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
        CommonModule
    ]
})
export class SelectModule {

}