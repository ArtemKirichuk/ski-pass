import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SkiPassesComponent } from './ski-passes.component';



@NgModule({
    declarations: [
        SkiPassesComponent
    ],
    exports:[
        SkiPassesComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'', component: SkiPassesComponent}])
    ]
})
export class SkiPassesModule { }
