import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonCardModule } from '../shared/person-card/person-card.module';
import { SelectComponent } from './select.component';

@NgModule({
    declarations: [
        SelectComponent
    ],
    exports: [
        SelectComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PersonCardModule
    ]
})
export class SelectModule {

}