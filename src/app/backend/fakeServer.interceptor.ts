import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable, of} from 'rxjs';
import { InstructorType, KeyInstructorType, KeyVisitorType,  SkiPassType,  UserType, VisitorType } from '../shared/interfaces';
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
        console.log(request.method + ' ' + request.url);
        // SIGIN 
        if (request.method === "POST" && request.url === "signIn") {
            return of(new HttpResponse({ status: 200, body: this.Auth.signIn(request.body) }));
        }
        // SIGNOUT 
        if (request.method === "DELETE" && request.url === "signIn") {
            this.Auth.signOut()
            return of(new HttpResponse({ status: 200, body: true }));
        }
        // CHECK AUTH
        if (request.method === "GET" && request.url === "user") {
            return of(new HttpResponse({ status: 200, body: this.Auth.checkAuth() }));
        }
        //USER
        // CREATE USER
        if (request.method === "POST" && request.url === "user") {
            return of(new HttpResponse({ status: 200, body: this.User.create<UserType>(request.body) }));
        }
        // UPDATE USER
        if (request.method === "PUT" && request.url === "user") {
            return of(new HttpResponse({ status: 200, body: this.User.update<UserType>(request.body) }));
        }

        //VISITER
        // GET VISITER
        if (request.method === "GET" && request.url === "visiter") {
            return of(new HttpResponse({ status: 200, body: this.Visiter.get<VisitorType>() }));
        }
        if (request.method === "POST" && request.url === "visiter") {
            return of(new HttpResponse({ status: 200, body: this.Visiter.create<VisitorType>(request.body) }));
        }
        if (request.method === "PUT" && request.url === "visiter") {
            return of(new HttpResponse({ status: 200, body: this.Visiter.update<VisitorType>(request.body) }));
        }
        if (request.method === "DELETE" && request.url === "visiter") {
            let fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
                let keyVisiter: KeyInstructorType = { fio: fioKey };
            return of(new HttpResponse({ status: 200, body: this.Visiter.delete<KeyVisitorType>(keyVisiter) }));
        }
        //INSTRUCTOR
        if (request.method === "GET" && request.url === "instructor") {
            return of(new HttpResponse({ status: 200, body: this.Instructor.get<Instructor>() }));
        }
        if (request.method === "POST" && request.url === "instructor") {
            return of(new HttpResponse({ status: 200, body: this.Instructor.create<Instructor>(request.body) }));
        }
        if (request.method === "DELETE" && request.url === "instructor") {
            let fioKey = request.params.get('fio');
            if (!fioKey)
                return of(new HttpResponse({ status: 200, body: false }));
            let keyInstructor: KeyInstructorType = { fio: fioKey };

            return of(new HttpResponse({ status: 200, body: this.Instructor.delete<KeyInstructorType>(keyInstructor) }));
        }
        if (request.method === "PUT" && request.url === "instructor") {
            return of(new HttpResponse({ status: 200, body: this.Instructor.update<Instructor>(request.body) }));
        }
        
        //SKIPASS
        if (request.method === "GET" && request.url === "skipass") {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.get<SkiPass>() }));
        }
        if (request.method === "POST" && request.url === "skipass") {
            return of(new HttpResponse({ status: 200, body: this.SkiPass.create<SkiPass>(request.body) }));
        }
        return next.handle(request.clone());
    }
    // setValue<T extends object, U extends keyof T>(obj:T, key:U , value:T[U]):T{
    //     obj[key] = value
    //     return obj
    // }


}
