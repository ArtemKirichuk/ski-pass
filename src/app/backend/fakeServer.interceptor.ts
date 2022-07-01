import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { InstructorType, KeyInstructorType, KeyVisitorType, SkiPassType, UserType, VisitorType } from '../types/types';
import { Visiter } from './visiter/visiter';
import { User } from './user/user';
import { Auth } from './auth/auth';
import { Instructor } from './instructor/instructor';
import { SkiPass } from './skipass/skipass';

@Injectable()
export class MainInterceptor implements HttpInterceptor {
    Visiter: Visiter;
    User: User;
    Auth: Auth;
    Instructor: Instructor;
    SkiPass: SkiPass;
    constructor() {
        this.Visiter = Visiter.instance;
        this.User = User.instance;
        this.Auth = Auth.instance;
        this.Instructor = Instructor.instance;
        this.SkiPass = SkiPass.instance;
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url == 'visiter') {
            return this.getResponceVisiter(request, next);
        }
        if (request.url == 'user') {
            return this.getResponceUser(request, next);
        }
        if (request.url == 'instructor') {
            return this.getResponceInstructor(request, next);
        }
        if (request.url == 'signIn') {
            return this.getResponceSignIn(request, next);
        }
        if (request.url == 'skipass') {
            return this.getResponceSkiPass(request, next);
        }

        return next.handle(request.clone());
    }
    getResponceUser(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Auth.checkAuth() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.User.create<UserType>(request.body) }));
        }
        if (request.method === 'PUT') {
            return of(new HttpResponse({ status: 200, body: this.User.update<UserType>(request.body) }));
        }
        return next.handle(request.clone());
    }
    getResponceInstructor(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.get<InstructorType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.create<InstructorType>(request.body) }));
        }
        if (request.method === 'DELETE') {
            const fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            const keyInstructor: KeyInstructorType = { fio: fioKey };

            return of(new HttpResponse({ status: 200, body: this.Instructor.delete<KeyInstructorType>(keyInstructor) }));
        }
        if (request.method === 'PUT') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.update<Instructor>(request.body) }));
        }
        return next.handle(request.clone());
    }
    getResponceVisiter(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.get<VisitorType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.create<VisitorType>(request.body) }));
        }
        if (request.method === 'PUT') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.update<VisitorType>(request.body) }));
        }
        if (request.method === 'DELETE') {
            const fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            const keyVisiter: KeyVisitorType = { fio: fioKey };
            return of(new HttpResponse({ status: 200, body: this.Visiter.delete<KeyVisitorType>(keyVisiter) }));
        }
        return next.handle(request.clone());
    }
    getResponceSignIn(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Auth.signIn(request.body) }));
        }
        if (request.method === 'DELETE') {
            this.Auth.signOut();
            return of(new HttpResponse({ status: 200, body: true }));
        }
        return next.handle(request.clone());
    }
    getResponceSkiPass(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.get<SkiPassType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.create<SkiPassType>(request.body) }));
        }
        return next.handle(request.clone());
    }

}
