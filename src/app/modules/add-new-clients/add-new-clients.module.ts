import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewClientsComponent } from './add-new-clients.component';



@NgModule({
    declarations: [AddNewClientsComponent],
    imports: [
        CommonModule
    ],
    exports:[
        AddNewClientsComponent
    ]
})
export class AddNewClientsModule { }
