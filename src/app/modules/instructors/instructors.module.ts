import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InstructorInfoComponent } from 'src/app/components/instructor-info/instructor-info.component';
import { PaginatorModule } from 'src/app/modules/paginator/paginator.module';
import { ButtonModule } from '../button/button.module';
import { InstructorCardModule } from '../instructor-card/instructor-card.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { InstructorsComponent } from './instructors.component';



@NgModule({
    declarations: [
        InstructorsComponent,
        InstructorInfoComponent
    ],
    exports:[
        InstructorsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'',component: InstructorsComponent}]),
        ButtonModule,
        PaginatorModule,
        PersonCardModule,
        InstructorCardModule
    ]
})
export class InstructorsModule { }
