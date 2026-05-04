import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Person {
  private http = inject(HttpClient);

  private apiUrl = "http://localhost/app-back/public/api/peoples";

  getPeoples(): Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }
  
  searchPeople(data:string): Observable<any>{
    const params = new HttpParams().set('firstName', data);
      return this.http.get<any>(`${this.apiUrl}/search`,{ params } );
  }

  deletePerson(id:string):Observable<any>{
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  uploadPhoto(id:string, formData:FormData):Observable<any>{
    return this.http.post<any>(`${this.apiUrl}/${id}/photo`, formData);
  }

  getPersonById(id:string):Observable <any>{
    return this.http.get<any>(`${this.apiUrl}/peoples/${id}`);
  }
  
}
