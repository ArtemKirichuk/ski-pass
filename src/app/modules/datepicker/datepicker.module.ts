import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { HeaderDatepickerComponent } from 'src/app/components/header-datepicker/header-datepicker.component';
import { DatepickerComponent } from './datepicker.component';



@NgModule({
    declarations: [
        DatepickerComponent,
        HeaderDatepickerComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatIconModule,
        MatNativeDateModule,
        MatInputModule,
        MatMomentDateModule,
        MatButtonModule,
        FormsModule
    ],
    exports:[
        DatepickerComponent,
        HeaderDatepickerComponent
    ]
})
export class DatepickerModule { }
