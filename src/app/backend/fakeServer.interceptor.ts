import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { InstructorType, KeyInstructorType, KeySkiPassType, KeyUserType, KeyVisitorType, SkiPassType, updateType, UserType, VisitorType } from '../types/types';
import { Visiter } from './visiter/visiter';
import { User } from './user/user';
import { Auth } from './auth/auth';
import { Instructor } from './instructor/instructor';
import { SkiPass } from './skipass/skipass';
type request = HttpRequest<
    UserType |
    VisitorType |
    InstructorType |
    SkiPassType |
    KeyUserType |
    updateType<KeyUserType, UserType> |
    updateType<KeyInstructorType, InstructorType>|
    updateType<KeyVisitorType, VisitorType>|
    updateType<KeySkiPassType, SkiPassType>
>;
type responce = boolean | UserType[] | VisitorType[] | InstructorType[] | SkiPassType[]|string;
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
    intercept(request: request, next: HttpHandler): Observable<HttpEvent<responce>> {

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
    getResponceVisiter(request: request, next: HttpHandler): Observable<HttpEvent<responce>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.get<VisitorType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Visiter.create<VisitorType>(request.body as VisitorType) }));
        }
        if (request.method === 'PUT') {
            const oldkey: KeyVisitorType = (request.body as updateType<KeyVisitorType, VisitorType>).oldKey;
            const newRow: VisitorType = (request.body as updateType<KeyVisitorType, VisitorType>).newRow;
            const isSuccess = this.Visiter.delete<KeyVisitorType>(oldkey) &&
                this.Visiter.create<VisitorType>(newRow);
            return of(new HttpResponse({ status: 200, body: isSuccess }));
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
    getResponceUser(request: request, next: HttpHandler): Observable<HttpEvent<responce>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.User.get<UserType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.User.create<UserType>(request.body as UserType) }));
        }
        if (request.method === 'PUT') {
            const oldkey: KeyUserType = (request.body as updateType<KeyUserType, UserType>).oldKey;
            const newRow: UserType = (request.body as updateType<KeyUserType, UserType>).newRow;
            const isSuccess = this.User.delete<KeyUserType>(oldkey) &&
                this.User.create<UserType>(newRow);
            return of(new HttpResponse({ status: 200, body: isSuccess }));
        }
        return next.handle(request.clone());
    }
    getResponceInstructor(request: request, next: HttpHandler): Observable<HttpEvent<responce>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.get<InstructorType>() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Instructor.create<InstructorType>(request.body as InstructorType) }));
        }
        if (request.method === 'PUT') {
            const oldkey: KeyInstructorType = (request.body as updateType<KeyInstructorType, InstructorType>).oldKey;
            const newRow: InstructorType = (request.body as updateType<KeyInstructorType, InstructorType>).newRow;
            const isSuccess = this.Instructor.delete<KeyInstructorType>(oldkey) &&
                this.Instructor.create<InstructorType>(newRow);
            return of(new HttpResponse({ status: 200, body: isSuccess }));
        }
        if (request.method === 'DELETE') {
            const fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            const keyInstructor: KeyInstructorType = { fio: fioKey };
            return of(new HttpResponse({ status: 200, body: this.Instructor.delete<KeyInstructorType>(keyInstructor) }));
        }
        
        return next.handle(request.clone());
    }

    getResponceSignIn(request: request , next: HttpHandler): Observable<HttpEvent<responce>> {

        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.Auth.checkAuth() }));
        }
        if (request.method === 'POST') {
            return of(new HttpResponse({ status: 200, body: this.Auth.signIn(request.body as UserType) }));
        }
        if (request.method === 'DELETE') {
            this.Auth.signOut();
            return of(new HttpResponse({ status: 200, body: true }));
        }
        return next.handle(request.clone());
    }
    getResponceSkiPass(request: request, next: HttpHandler): Observable<HttpEvent<responce>> {
        if (request.method === 'GET') {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.get<SkiPassType>() }));
        }
        if (request.method === 'POST') {

            return of(new HttpResponse({ status: 200, body: this.SkiPass.create<SkiPassType>(request.body as SkiPassType) }));
        }
        if (request.method === 'PUT') {
            const oldkey: KeySkiPassType = (request.body as updateType<KeySkiPassType, SkiPassType>).oldKey;
            const newRow: SkiPassType = (request.body as updateType<KeySkiPassType, SkiPassType>).newRow;
            const isSuccess = this.SkiPass.delete<KeySkiPassType>(oldkey) &&
                this.SkiPass.create<SkiPassType>(newRow);
            return of(new HttpResponse({ status: 200, body: isSuccess }));
        }
        if (request.method === 'DELETE') {
            const cardNumberParam = request.params.get('cardNumber');
            if (!cardNumberParam)
                return of(new HttpResponse({ status: 200, body: false }));
            const cardNumber: KeySkiPassType = { cardNumber: Number(cardNumberParam) };
            return of(new HttpResponse({ status: 200, body: this.SkiPass.delete<KeySkiPassType>(cardNumber) }));
        }
        return next.handle(request.clone());
    }

}
