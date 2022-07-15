import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';

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
          { path: 'ski-passes', loadChildren: () => import('src/app/modules/ski-passes/ski-passes.module').then(m => m.SkiPassesModule ) },
          { path: 'instructors', loadChildren: () => import('src/app/modules/instructors/instructors.module').then(m => m.InstructorsModule ) },
          { path: 'clients', loadChildren: () => import('src/app/modules/clients/clients.module').then(m => m.ClientsModule ) },
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
