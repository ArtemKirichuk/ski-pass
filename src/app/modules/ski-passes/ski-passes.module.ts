import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { SkiPassesComponent } from './ski-passes.component';
import { MatMenuModule } from '@angular/material/menu';

import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { SkiPassesCardComponent } from './ski-passes-card/ski-passes-card.component';
@NgModule({
    declarations: [
        SkiPassesComponent,
        SkiPassesCardComponent
    ],
    imports: [
        CommonModule,
        MatMenuModule,
        MatIconModule,
        RouterModule.forChild([{ path: '', component: SkiPassesComponent }])
    ]
})
export class SkiPassesModule { }
