import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
    declarations: [],
    exports:[
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule
    ]
})
export class SharedModule { }
