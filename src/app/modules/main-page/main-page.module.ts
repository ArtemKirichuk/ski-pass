import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ButtonModule } from '../shared/button/button.module';
import { EditInstructorModule } from '../instructors/edit-instructor/edit-instructor.module';
import { HeaderModule } from './header/header.module';
import { InputModule } from '../shared/input/input.module';
import { PersonCardModule } from '../shared/person-card/person-card.module';
import { PhotoFormModule } from '../shared/photo-form/photo-form.module';

import { TitleModalFormModule } from '../shared/title-modal-form/title-modal-form.module';
import { MainPageRoutingModule } from './main-page-routing';
import { MainPageComponent } from './main-page.component';


@NgModule({
    declarations: [
        MainPageComponent,
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        ButtonModule,
        PersonCardModule,
        InputModule,
        PhotoFormModule,
        TitleModalFormModule,
        HeaderModule,
        EditInstructorModule,
        MainPageRoutingModule
    ]
})
export class MainPageModule { }
