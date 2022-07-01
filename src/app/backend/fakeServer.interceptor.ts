import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { KeyInstructorType, KeyVisitorType, UserType, VisitorType } from '../modules/shared/interfaces';
import { Auth } from './auth/auth';
import { Instructor } from './instructor/instructor';
import { SkiPass } from './skipass/skipass';
import { User } from './user/user';
import { Visiter } from './visiter/visiter';

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
        if (request.method === 'POST' && request.url === 'signIn') {
            return of(new HttpResponse({ status: 200, body: this.Auth.signIn(request.body) }));
        }
        if (request.method === 'DELETE' && request.url === 'signIn') {
            this.Auth.signOut();
            return of(new HttpResponse({ status: 200, body: true }));
        }
        if (request.method === 'GET' && request.url === 'user') {
            return of(new HttpResponse({ status: 200, body: this.Auth.checkAuth() }));
        }
        if (request.method === 'POST' && request.url === 'user') {
            return of(new HttpResponse({ status: 200, body: this.User.create<UserType>(request.body) }));
        }
        if (request.method === 'PUT' && request.url === 'user') {
            return of(new HttpResponse({ status: 200, body: this.User.update<UserType>(request.body) }));
        }
        if (request.method === 'GET' && request.url === 'visiter') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.get<VisitorType>() }));
        }
        if (request.method === 'POST' && request.url === 'visiter') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.create<VisitorType>(request.body) }));
        }
        if (request.method === 'PUT' && request.url === 'visiter') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.update<VisitorType>(request.body) }));
        }
        if (request.method === 'DELETE' && request.url === 'visiter') {
            const fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            const keyVisiter: KeyInstructorType = { fio: fioKey };
            return of(new HttpResponse({ status: 200, body: this.Visiter.delete<KeyVisitorType>(keyVisiter) }));
        }
        if (request.method === 'GET' && request.url === 'instructor') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.get<Instructor>() }));
        }
        if (request.method === 'POST' && request.url === 'instructor') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.create<Instructor>(request.body) }));
        }
        if (request.method === 'DELETE' && request.url === 'instructor') {
            const fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            const keyInstructor: KeyInstructorType = { fio: fioKey };
            return of(new HttpResponse({ status: 200, body: this.Instructor.delete<KeyInstructorType>(keyInstructor) }));
        }
        if (request.method === 'PUT' && request.url === 'instructor') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.update<Instructor>(request.body) }));
        }
        if (request.method === 'GET' && request.url === 'skipass') {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.get<SkiPass>() }));
        }
        if (request.method === 'POST' && request.url === 'skipass') {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.create<SkiPass>(request.body) }));
        }
        return next.handle(request.clone());
    }
    // setValue<T extends object, U extends keyof T>(obj:T, key:U , value:T[U]):T{
    //     obj[key] = value
    //     return obj
    // }


}
