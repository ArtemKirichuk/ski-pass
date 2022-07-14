import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule } from '@angular/router';
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
import { ContainerMiniComponent } from 'src/app/components/container-mini/container-mini.component';
import { InstructorsMiniComponent } from 'src/app/components/instructors-mini/instructors-mini.component';
// import { DeleteFormComponent } from 'src/app/components/ski-pass-mimi/delete-form/delete-form.component';
// import { DisplayFormComponent } from 'src/app/components/ski-pass-mimi/display-form/display-form.component';
// import { SkiPassesFormComponent } from 'src/app/components/ski-pass-mimi/form/form.component';
// import { SkiPassMimiComponent } from 'src/app/components/ski-pass-mimi/ski-pass-mimi.component';
// import { SkiPassesCardComponent } from 'src/app/components/ski-pass-mimi/ski-passes-card/ski-passes-card.component';

import { AddNewClientsModule } from '../add-new-clients/add-new-clients.module';
import { AddNewInstructorModule } from '../add-new-instructor/add-new-instructor.module';
import { ButtonModule } from '../button/button.module';
import { EditInstructorModule } from '../edit-instructor/edit-instructor.module';
import { HeaderModule } from '../header/header.module';
import { InputModule } from '../input/input.module';
import { InstructorCardModule } from '../instructor-card/instructor-card.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { SkiPassesModule } from '../ski-passes/ski-passes.module';


import { TitleModalFormModule } from '../title-modal-form/title-modal-form.module';
import { MainPageComponent } from './main-page.component';


@NgModule({
    declarations: [
        MainPageComponent,
        ClientsMiniComponent,
        InstructorsMiniComponent,
        ContainerMiniComponent,
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
        SkiPassesModule,

        RouterModule.forChild([{ path: '', component: MainPageComponent }]),
    ]
})
export class MainPageModule { }
