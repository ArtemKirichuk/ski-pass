import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../components/button/button.component';

@NgModule({
    declarations: [ButtonComponent],
    exports:[
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatDialogModule,
        ButtonComponent
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
