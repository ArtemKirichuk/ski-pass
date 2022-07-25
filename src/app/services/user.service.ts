import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { KeyUserType, updateType, UserType } from '../types/types';

@Injectable({
    providedIn: 'root'
}) 
export class UserService {
    signIn = 'signIn';
    userUrl ='user';
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
        return this.httpClient.post<UserType>(this.userUrl, user);
    }

    changeUser(update: updateType<KeyUserType, UserType>): Observable<boolean>{
        return this.httpClient.put<boolean>(this.userUrl, update);
    }   

    getUsers(): Observable<UserType[]> {
        return this.httpClient.get<UserType[]>(this.userUrl);
    }

    //------------------------------ singIn -----------------------------------
    singIn(user: UserType): Observable<UserType|undefined> {
        return this.httpClient.post<UserType|undefined>(this.signIn, user);
    }

    singInGet(): Observable<string> {
        return this.httpClient.get<string>(this.signIn);
    }

    singOut():Observable<boolean>{
        return this.httpClient.delete<boolean>(this.signIn);
    }

    

    
}