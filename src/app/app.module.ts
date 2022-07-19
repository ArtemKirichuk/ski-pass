import { registerLocaleData } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MainInterceptor } from './backend/fakeServer.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './modules/main-page/main-page.module';

registerLocaleData(localeRu, 'ru');

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        MainPageModule,
        BrowserAnimationsModule 
    ],
    providers: [
        { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
        { provide: LOCALE_ID, useValue: 'ru' },
        { provide: HTTP_INTERCEPTORS, useClass: MainInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
