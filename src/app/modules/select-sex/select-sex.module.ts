import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectSexComponent } from './select-sex.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [SelectSexComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports:[
        SelectSexComponent
    ]
})
export class SelectSexModule { }
