import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClientService } from '../services/http-client-service.service';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  reqHeader: any;
  
  constructor(private http: HttpClient, private _http: HttpClientService) {     
       this.reqHeader = new HttpHeaders({ 'Content-Type': 'application/json' });
  }

  signupVerify(userDetails: any): Observable<any> {
    return this.http.post(`${environment.baseApi}/register`, userDetails);
  }

  register(userdetails: any): Observable<any> {
    return this.http.post(`${environment.baseApi}/register`, userdetails, { observe: 'response' });
  }

  loginVerify(loginDetails: any): Observable<any> {
<<<<<<< HEAD
    return this.http.post(`${environment.baseApi}/login`, loginDetails, {headers: this.reqHeader, responseType: 'json'});
  }

  setUserSession(loginObj: any): void {
      window.sessionStorage.setItem('email', loginObj.email);
      window.sessionStorage.setItem('password', loginObj.password);
      window.sessionStorage.setItem('role', loginObj.role);
      localStorage.setItem("user_details", JSON.stringify(loginObj));
      localStorage.setItem("token", loginObj.token);
=======
    return this.http.post(`${environment.baseApi}/login`, loginDetails, { observe: 'response' });
>>>>>>> new changes
  }

}
