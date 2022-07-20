import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { AgeModule } from '../age/age.module';
import { PersonCardComponent } from './person-card.component';

@NgModule({
    declarations: [
        PersonCardComponent
    ],
    exports: [PersonCardComponent],
    imports: [
        MatMenuModule,
        MatIconModule,
        AgeModule,
        CommonModule,
        PhotoFormModule
    ]
})
export class PersonCardModule {

}