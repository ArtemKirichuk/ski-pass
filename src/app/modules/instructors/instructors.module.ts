import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { InstructorDeleteComponent } from 'src/app/components/instructor-delete/instructor-delete.component';
import { InstructorInfoComponent } from 'src/app/components/instructor-info/instructor-info.component';
import { PaginatorModule } from 'src/app/modules/shared/paginator/paginator.module';
import { ButtonModule } from '../shared/button/button.module';
import { EditInstructorModule } from './edit-instructor/edit-instructor.module';
import { InstructorCardModule } from './instructor-card/instructor-card.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { TitleModalFormModule } from '../shared/title-modal-form/title-modal-form.module';
import { InstructorsComponent } from './instructors.component';



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
        // RouterModule.forChild([{path:'',component: InstructorsComponent}]),
        ButtonModule,
        PaginatorModule,
        // PersonCardModule,
        InstructorCardModule,
        TitleModalFormModule,
        EditInstructorModule,
        MatDialogModule
    ]
})
export class InstructorsModule { }
