import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { ContainerMiniComponent } from 'src/app/modules/main-page/content-page/container-mini/container-mini.component';
import { SkiPassesModule } from '../../ski-passes/ski-passes.module';
import { RouterModule } from '@angular/router';
import { InstructorsModule } from '../../instructors/instructors.module';
import { ClientsModule } from 'src/app/modules/clients/clients.module';

@NgModule({
  declarations: [
    ContentPageComponent,
    ContainerMiniComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ContentPageComponent }]),
    InstructorsModule,
    SkiPassesModule,
    ClientsModule
 
  ]
})
export class ContentPageModule { }
