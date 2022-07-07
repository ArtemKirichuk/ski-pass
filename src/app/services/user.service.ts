import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KeyUserType, updateType, UserType } from '../types/types';

@Injectable({
    providedIn: 'root'
}) 
export class UserService {

    currentUser$: BehaviorSubject<UserType> = new BehaviorSubject<UserType>({} as UserType);

    constructor(private httpClient: HttpClient) {
    }

    //------------------------------ stream -----------------------------------
    getUser$(): BehaviorSubject<UserType> {
        return this.currentUser$;
    }

    sendUser$(user: UserType): void {
        this.currentUser$.next(user);
    }

    //------------------------------- user ------------------------------------
    createUser(user: UserType): Observable<UserType> {
        return this.httpClient.post<UserType>('user', user);
    }

    changeUser(update: updateType<KeyUserType, UserType>): Observable<boolean>{
        return this.httpClient.put<boolean>('user', update);
    }   

    getUsers(): Observable<UserType[]> {
        return this.httpClient.get<UserType[]>('user');
    }

    //------------------------------ singIn -----------------------------------
    singIn(user: UserType): Observable<boolean> {
        return this.httpClient.post<boolean>('signIn', user);
    }

    singInGet(): Observable<string> {
        return this.httpClient.get<string>('signIn');
    }

    singOut():Observable<boolean>{
        return this.httpClient.delete<boolean>('singIn');
    }

    

    
}