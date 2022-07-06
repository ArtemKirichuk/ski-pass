import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
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
        AgeModule
    ]
})
export class PersonCardModule {

}