import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { InstructorDeleteComponent } from 'src/app/modules/instructors/instructor-delete/instructor-delete.component';
import { InstructorInfoComponent } from 'src/app/modules/instructors/instructor-info/instructor-info.component';
import { PaginatorModule } from 'src/app/modules/shared/paginator/paginator.module';
import { ButtonModule } from '../shared/button/button.module';
import { EditInstructorModule } from './edit-instructor/edit-instructor.module';
import { TitleModalFormModule } from '../shared/title-modal-form/title-modal-form.module';
import { InstructorsComponent } from './instructors.component';
import { RouterModule } from '@angular/router';
import { PersonCardModule } from '../shared/person-card/person-card.module';
import { PhotoFormModule } from '../shared/photo-form/photo-form.module';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [
        InstructorsComponent,
        InstructorInfoComponent,
        InstructorDeleteComponent
    ],
    exports:[
        InstructorsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'instructors',component: InstructorsComponent}]),
        ButtonModule,
        PaginatorModule,
        TitleModalFormModule,
        EditInstructorModule,
        MatDialogModule,
        PersonCardModule,
        PhotoFormModule,
        MatIconModule
    ]
})
export class InstructorsModule { }
