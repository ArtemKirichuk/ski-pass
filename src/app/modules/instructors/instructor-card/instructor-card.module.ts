import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AgeModule } from '../../shared/age/age.module';
import { InstructorCardComponent } from './instructor-card.component';

@NgModule({
    declarations: [
        InstructorCardComponent
    ],
    exports: [
        InstructorCardComponent
    ],
    imports: [
        MatMenuModule,
        MatIconModule,
        AgeModule,
        CommonModule
    ]
})
export class InstructorCardModule {

}