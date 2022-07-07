import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InstructorType, KeyInstructorType, updateType } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class InstuctorService {

    constructor(private httpClient: HttpClient) { }

    getInstructors(): Observable<InstructorType[]> {
        return this.httpClient.get<InstructorType[]>('instructor');
    }

    createInstructor(instructor: InstructorType): Observable<boolean> {
        return this.httpClient.post<boolean>('instructor', instructor);
    }

    changeInstructor(update: updateType<KeyInstructorType, InstructorType>): Observable<boolean> {
        return this.httpClient.put<boolean>('instructor', update);
    }

    deleteInstructor(instructor: InstructorType): Observable<boolean> {
        const params = new HttpParams().set('fio', instructor.fio);
        return this.httpClient.delete<boolean>('instructor', {params});
    }
}
