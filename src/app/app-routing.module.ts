import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot([
            {
                path: 'autorization',
                loadChildren: () => import('src/app/modules/autorization/autorization.module').then(m => m.AutorizationModule)
            },
            {
                path: 'registration',
                loadChildren: () => import('src/app/modules/registration/registration.module').then(m => m.RegistrationModule)
            },
            {
                path: '',
                loadChildren: () => import('src/app/modules/main-page/main-page.module').then(m => m.MainPageModule)
            },
        ])
    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports: [RouterModule]
})
export class AppRoutingModule { }
