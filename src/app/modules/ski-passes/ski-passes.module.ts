import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SkiPassesComponent } from './ski-passes.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule, registerLocaleData } from '@angular/common';
import { SkiPassesCardComponent } from './ski-passes-card/ski-passes-card.component';


import { SkiPassesFormComponent } from './form/form.component';
import { ButtonModule } from '../button/button.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PaginatorModule } from '../paginator/paginator.module';
import localeRu from '@angular/common/locales/ru';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { DeleteFormComponent } from './delete-form/delete-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
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
        RouterModule.forChild([{ path: '', component: SkiPassesComponent }]),
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
        MatAutocompleteModule
    ],
    providers: [],

})
export class SkiPassesModule {
    constructor() {
        if (localeRu)
            registerLocaleData(localeRu, 'ru');
    }
}
