import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleModalFormComponent } from './title-modal-form.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    TitleModalFormComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    TitleModalFormComponent
  ]
})
export class TitleModalFormModule { }
