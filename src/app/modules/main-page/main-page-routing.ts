import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentPageComponent } from './content-page/content-page.component';

import { SkiPassesComponent } from '../ski-passes/ski-passes.component';
import { MainPageComponent } from './main-page.component';
import { InstructorsComponent } from '../instructors/instructors.component';
import { ClientsComponent } from '../clients/clients.component';
// {
//   path: 'clients',
//   loadChildren: () => import('src/app/modules/clients/clients.module').then(m => m.ClientsModule)
// },
const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {
        path: '',

        children: [
          { path: '', loadChildren: () => import('src/app/modules/main-page/content-page/content-page.module').then(m => m.ContentPageModule) },
          { path: 'ski-passes', component: SkiPassesComponent },
          { path: 'instructors', component: InstructorsComponent },
          { path: 'clients', component: ClientsComponent },
        ]
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  exports: [RouterModule]
})
export class MainPageRoutingModule { }
