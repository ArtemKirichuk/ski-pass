import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { InstructorsComponent } from './instructors.component';



@NgModule({
    declarations: [
        InstructorsComponent
    ],
    exports:[
        InstructorsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{path:'',component: InstructorsComponent}])
    ]
})
export class InstructorsModule { }
