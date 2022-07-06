import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { PaginatorModule } from 'src/app/paginator/paginator.module';
import { ButtonModule } from '../button/button.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { ClientsComponent } from './clients.component';


@NgModule({
    declarations: [
        ClientsComponent
    ],
    exports: [
        ClientsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'', component: ClientsComponent}]),
        MatMenuModule,
        MatIconModule,        
        ButtonModule,
        PaginatorModule,
        PersonCardModule
    ]
})
export class ClientsModule { }
