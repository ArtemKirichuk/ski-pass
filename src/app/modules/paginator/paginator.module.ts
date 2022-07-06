import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaginatorComponent } from './paginator.component';

@NgModule({
    declarations: [PaginatorComponent],
    exports: [PaginatorComponent],
    imports: [CommonModule]
})
export class PaginatorModule {

}