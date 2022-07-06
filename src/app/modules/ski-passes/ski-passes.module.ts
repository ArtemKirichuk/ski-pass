import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SkiPassesComponent } from './ski-passes.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
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

@NgModule({
    declarations: [
        SkiPassesComponent,
        SkiPassesCardComponent,
        SkiPassesFormComponent
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

    ],

})
export class SkiPassesModule { }
