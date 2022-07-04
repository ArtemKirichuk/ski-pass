import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MainPageComponent } from '../main-page/main-page.component';



@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            { path: 'autorization', 
                loadChildren: () => import('src/app/modules/autorization/autorization.module').then(m=>m.AutorizationModule)}, 
            { path: 'registration', 
                loadChildren: () => import('src/app/modules/registration/registration.module').then(m=>m.RegistrationModule)},
            { path: '', component: MainPageComponent},
            { path: 'clients', 
                loadChildren: () => import('src/app/modules/clients/clients.module').then(m=>m.ClientsModule)},
            { path: 'instructors', 
                loadChildren: () => import('src/app/modules/instructors/instructors.module').then(m=>m.InstructorsModule)},
            { path: 'ski-passes', 
                loadChildren: () => import('src/app/modules/ski-passes/ski-passes.module').then(m=>m.SkiPassesModule)},

        ])
    ],
    exports:[RouterModule]
})
export class AppRoutingModule { }