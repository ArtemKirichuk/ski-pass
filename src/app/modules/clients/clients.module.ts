import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientsComponent } from './clients.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
    declarations: [
        ClientsComponent
    ],
    exports: [
        ClientsComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild([{path:'', component: ClientsComponent}])
    ]
})
export class ClientsModule { }
