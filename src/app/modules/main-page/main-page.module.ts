import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
import { InstructorsMiniComponent } from 'src/app/components/instructors-mini/instructors-mini.component';
import { AddNewClientsModule } from '../add-new-clients/add-new-clients.module';
import { AddNewInstructorModule } from '../add-new-instructor/add-new-instructor.module';
import { ButtonModule } from '../button/button.module';
import { EditInstructorModule } from '../edit-instructor/edit-instructor.module';
import { HeaderModule } from '../header/header.module';
import { InputModule } from '../input/input.module';
import { InstructorCardModule } from '../instructor-card/instructor-card.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { MainPageComponent } from './main-page.component';


@NgModule({
    declarations: [
        MainPageComponent,
        ClientsMiniComponent,
        InstructorsMiniComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        RouterModule.forChild([{path:'', component: MainPageComponent}]),
        ButtonModule,
        PersonCardModule,
        InputModule,
        PhotoFormModule,
        TitleModalFormModule,
        InstructorCardModule,
        AddNewClientsModule,
        AddNewInstructorModule,
        HeaderModule,
        EditInstructorModule
    ]
})
export class MainPageModule { }
