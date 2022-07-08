import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { ClientInfoComponent } from 'src/app/components/client-info/client-info.component';
import { PaginatorModule } from 'src/app/modules/paginator/paginator.module';
import { AddNewClientsModule } from '../add-new-clients/add-new-clients.module';
import { ButtonModule } from '../button/button.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { ClientsComponent } from './clients.component';


@NgModule({
    declarations: [
        ClientsComponent,
        ClientInfoComponent
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
        PersonCardModule,
        AddNewClientsModule
    ]
})
export class ClientsModule { }
