import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  ReactiveFormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { RouterModule } from '@angular/router';
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
import { ContainerMiniComponent } from 'src/app/components/container-mini/container-mini.component';
// import { InstructorsMiniComponent } from 'src/app/components/instructors-mini/instructors-mini.component';
// import { DeleteFormComponent } from 'src/app/components/ski-pass-mimi/delete-form/delete-form.component';
// import { DisplayFormComponent } from 'src/app/components/ski-pass-mimi/display-form/display-form.component';
// import { SkiPassesFormComponent } from 'src/app/components/ski-pass-mimi/form/form.component';
// import { SkiPassMimiComponent } from 'src/app/components/ski-pass-mimi/ski-pass-mimi.component';
// import { SkiPassesCardComponent } from 'src/app/components/ski-pass-mimi/ski-passes-card/ski-passes-card.component';

import { AddNewClientsModule } from '../clients/add-new-clients/add-new-clients.module';
import { AddNewInstructorModule } from '../instructors/add-new-instructor/add-new-instructor.module';
import { ButtonModule } from '../shared/button/button.module';
import { EditInstructorModule } from '../instructors/edit-instructor/edit-instructor.module';
import { HeaderModule } from './header/header.module';
import { InputModule } from '../shared/input/input.module';
import { InstructorCardModule } from '../instructors/instructor-card/instructor-card.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { SkiPassesModule } from '../ski-passes/ski-passes.module';


import { TitleModalFormModule } from '../shared/title-modal-form/title-modal-form.module';
import { MainPageRoutingModule } from './main-page-routing';
import { MainPageComponent } from './main-page.component';


@NgModule({
    declarations: [
        MainPageComponent,
        ClientsMiniComponent,
        // InstructorsMiniComponent,
        // ContainerMiniComponent,
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
        InstructorCardModule,
        AddNewClientsModule,
        AddNewInstructorModule,
        HeaderModule,
        EditInstructorModule,
        // SkiPassesModule,
        MainPageRoutingModule
        // RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    ]
})
export class MainPageModule { }
