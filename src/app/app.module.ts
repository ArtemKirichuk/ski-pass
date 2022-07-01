import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainInterceptor } from './backend/fakeServer.interceptor';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MainPageModule } from './modules/main-page/main-page.module';
import { SharedModule } from './modules/shared/shared.module';

@NgModule({
    declarations: [
        AppComponent,
        EditProfileComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
        FormsModule,
        HttpClientModule,
        MainPageModule 
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
        { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
