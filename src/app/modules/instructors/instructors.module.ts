import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
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
        RouterModule.forChild([{path:'',component: InstructorsComponent}])
    ]
})
export class InstructorsModule { }
