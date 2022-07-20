import { NgModule } from '@angular/core';

// import { RouterModule } from '@angular/router';
import { SkiPassesComponent } from './ski-passes.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SkiPassesCardComponent } from './ski-passes-card/ski-passes-card.component';


import { SkiPassesFormComponent } from './form/form.component';
import { ButtonModule } from '../shared/button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaginatorModule } from '../shared/paginator/paginator.module';

import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { RouterModule } from '@angular/router';
import { PersonCardModule } from '../person-card/person-card.module';
import { InputModule } from '../shared/input/input.module';
@NgModule({
    declarations: [
        SkiPassesComponent,
        SkiPassesCardComponent,
        SkiPassesFormComponent,
        DeleteFormComponent,
        DisplayFormComponent
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        RouterModule.forChild([{ path: 'ski-passes', component: SkiPassesComponent }]),
        ButtonModule,
        PaginatorModule,
        ButtonModule,
        //mat
        MatDialogModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatMenuModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatAutocompleteModule,
        PersonCardModule,
        InputModule
    ],
    exports:[
        SkiPassesComponent,
        SkiPassesCardComponent,
        SkiPassesFormComponent,
        DeleteFormComponent,
        DisplayFormComponent
    ]

})
export class SkiPassesModule {
 
}
