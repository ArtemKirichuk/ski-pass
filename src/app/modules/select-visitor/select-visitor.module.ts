import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonCardModule } from '../shared/person-card/person-card.module';
import { SelectVisitorComponent } from './select-visitor.component';

@NgModule({
    declarations: [
        SelectVisitorComponent
    ],
    exports: [
        SelectVisitorComponent
    ],
    imports: [
        PersonCardModule,
        CommonModule,
        FormsModule
    ]
})
export class SelectVisitorModule {

}