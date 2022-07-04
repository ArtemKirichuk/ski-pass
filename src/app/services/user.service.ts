import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserType } from '../types/types';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 
export class UserService {

    constructor(private httpClient: HttpClient) {
    }

    createUser(user: UserType): Observable<UserType> {
        return this.httpClient.post<UserType>('user', user);
    }
}