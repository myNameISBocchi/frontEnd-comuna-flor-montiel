import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  private apiUrl ="http://localhost/app-back/public/api";

  constructor(private http: HttpClient){}
  
  login(credentials: any): Observable<any> {
  return this.http.post(`${this.apiUrl}/loggin`, credentials).pipe(
    tap((response: any) => {
      if (response && response.results && response.results[0].token) {
        localStorage.setItem('auth_token', response.results[0].token);
        console.log('Token guardado correctamente');
      }
    })
  );
}
  isLoggedIn(): boolean{
    return !!localStorage.getItem('auth_token');
  }

  getToken(){
    localStorage.removeItem('auth_token');
  }

  logout() {
    localStorage.removeItem('auth_token');
    
  }
  }
  