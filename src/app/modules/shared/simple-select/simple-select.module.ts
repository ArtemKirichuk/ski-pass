import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SimpleSelectComponent } from './simple-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonCardModule } from '../person-card/person-card.module';

@NgModule({
  declarations: [SimpleSelectComponent],
  imports: [
    
    CommonModule,
    FormsModule,
    MatAutocompleteModule,
    PersonCardModule,
    ReactiveFormsModule,
    
  ],
  exports:[
    SimpleSelectComponent,
    
  ]
})
export class SimpleSelectModule { }
