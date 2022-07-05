import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { AgePipe } from 'src/app/age.pipe';
import { PersonCardComponent } from './person-card.component';

@NgModule({
    declarations: [
        PersonCardComponent, 
        AgePipe
    ],
    exports: [PersonCardComponent],
    imports: [
        MatMenuModule,
        MatIconModule
    ]
})
export class PersonCardModule {

}