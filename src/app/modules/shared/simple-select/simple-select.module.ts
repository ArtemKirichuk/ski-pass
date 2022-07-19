import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SimpleSelectComponent } from './simple-select.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SimpleSelectComponent],
  imports: [
    
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    
    
  ],
  exports:[
    SimpleSelectComponent,
    
  ]
})
export class SimpleSelectModule { }
