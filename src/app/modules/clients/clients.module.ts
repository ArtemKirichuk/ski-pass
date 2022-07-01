import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
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
        RouterModule.forChild([{path:'', component: ClientsComponent}])
    ]
})
export class ClientsModule { }
