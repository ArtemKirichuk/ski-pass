import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { KeyVisitorType, updateType, VisitorType } from '../types/types';

@Injectable({
    providedIn: 'root'
})
export class VisitorService {

    visitorsList$: BehaviorSubject<VisitorType[]> = new BehaviorSubject<VisitorType[]>([]);

    constructor(private httpClient: HttpClient) { }

    getVisitors(): Observable<VisitorType[]> {
        return this.httpClient.get<VisitorType[]>('visiter');
    }

    createVisitor(visitor: VisitorType): Observable<boolean> {
        return this.httpClient.post<boolean>('visiter', visitor);
    }

    changeVisitor(update: updateType<KeyVisitorType, VisitorType>): Observable<boolean> {
        return this.httpClient.put<boolean>('visiter', update);
    }

    deleteVisitor(visitor: VisitorType): Observable<boolean> {
        const params = new HttpParams().set('fio', visitor.fio);
        return this.httpClient.delete<boolean>('visiter', {params});
    }

    getVisitorsListStream$(): BehaviorSubject<VisitorType[]> {
        return this.visitorsList$;
    }

    sendVisitorToStream(val: VisitorType[]): void{
        this.visitorsList$.next(val);
    }
}
