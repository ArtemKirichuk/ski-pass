import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PersonCardComponent } from 'src/app/components/person-card/person-card.component';
import { ClientsComponent } from './clients.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { AgePipe } from '../../age.pipe';
import { ButtonAddModule } from '../button-add/button-add.module';
import { PaginatorModule } from 'src/app/paginator/paginator.module';


@NgModule({
    declarations: [
        ClientsComponent,
        PersonCardComponent,
        AgePipe
    ],
    exports: [
        ClientsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'', component: ClientsComponent}]),
        MatMenuModule,
        MatIconModule,        
        ButtonAddModule,
        PaginatorModule
    ]
})
export class ClientsModule { }
