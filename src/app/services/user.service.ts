import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType, VisitorType } from '../types/types';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 
export class UserService {

    currentUser$: BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);

    constructor(private httpClient: HttpClient) {
    }

    createUser(user: UserType): Observable<UserType> {
        return this.httpClient.post<UserType>('user', user);
    }

    changeUser(user: UserType): Observable<UserType>{
        return this.httpClient.put<UserType>('user', user);
    }

    getUser$(): BehaviorSubject<UserType> {
        return this.currentUser$;
    }

    singIn(user: UserType): Observable<boolean> {
        return this.httpClient.post<boolean>('signIn', user);
    }

    singInGet(): Observable<string> {
        return this.httpClient.get<string>('signIn');
    }

    singOut():Observable<boolean>{
        return this.httpClient.delete<boolean>('singIn');
    }

    getUsers(): Observable<UserType[]> {
        return this.httpClient.get<UserType[]>('user');
    }

    getVisitors(){
        return this.httpClient.get<VisitorType[]>('visiter');
    }

    sendUser$(user: UserType): void {
        this.currentUser$.next(user);
    }
}