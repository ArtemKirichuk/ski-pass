import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { KeySkiPassType, SkiPassType } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class SkipassService {
  url = 'skipass';
  constructor(private http:HttpClient) { }
  get():Observable<SkiPassType[]>{
    return this.http.get<SkiPassType[]>(this.url)
  }
  create(row:SkiPassType):Observable<boolean>{
    return this.http.post<boolean>(this.url,row);
  }
  delete(key:KeySkiPassType):Observable<boolean>{
    return this.http.delete<boolean>(this.url,{params:key})
  }
}
