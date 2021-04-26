import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  
  constructor(private http: HttpClient) { }

  signupVerify(userDetails: any): Observable<any> {
    return this.http.post(`${environment.baseApi}/register`, userDetails);
  }

  register(userdetails: any): Observable<any> {
    return this.http.post(`${environment.baseApi}/register`, userdetails);
  }

  loginVerify(loginDetails: any): Observable<any> {
    return this.http.post(`${environment.baseApi}/login`, loginDetails);
  }

}
