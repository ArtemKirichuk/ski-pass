import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { PhotoFormModule } from '../photo-form/photo-form.module';
import { ClientDeleteComponent } from 'src/app/modules/clients/client-delete/client-delete.component';
import { ClientInfoComponent } from 'src/app/modules/clients/client-info/client-info.component';
import { PaginatorModule } from 'src/app/modules/shared/paginator/paginator.module';
import { AddNewClientsModule } from './add-new-clients/add-new-clients.module';
import { ButtonModule } from '../shared/button/button.module';
import { EditClientsModule } from './edit-clients/edit-clients.module';
import { PersonCardModule } from '../person-card/person-card.module';
import { TitleModalFormModule } from '../shared/title-modal-form/title-modal-form.module';
import { ClientsComponent } from './clients.component';



@NgModule({
    declarations: [
        ClientsComponent,
        ClientInfoComponent,
        ClientDeleteComponent
    ],
    exports: [
        ClientsComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([{path:'clients', component: ClientsComponent}]),
        MatMenuModule,
        MatIconModule,        
        ButtonModule,
        PaginatorModule,
        PersonCardModule,
        AddNewClientsModule,
        TitleModalFormModule,
        EditClientsModule,
        MatDialogModule,
        PhotoFormModule,
    ]
})
export class ClientsModule { }
