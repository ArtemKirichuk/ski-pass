import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentPageComponent } from './content-page.component';
import { ContainerMiniComponent } from 'src/app/components/container-mini/container-mini.component';
import { ClientsMiniComponent } from 'src/app/components/clients-mini/clients-mini.component';
// import { InstructorsMiniComponent } from 'src/app/components/instructors-mini/instructors-mini.component';
import { SkiPassesModule } from '../../ski-passes/ski-passes.module';
import { RouterModule } from '@angular/router';
import { InstructorsModule } from '../../instructors/instructors.module';
import { ClientsModule } from 'src/app/modules/clients/clients.module';



@NgModule({
  declarations: [
    ContentPageComponent,
    ContainerMiniComponent,
    // ClientsMiniComponent,
    // InstructorsMiniComponent,
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
