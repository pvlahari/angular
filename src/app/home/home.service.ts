import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  //url: any = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  userslist(): Observable<any> {
     return this.http.get(`${environment.baseApi}`);
  }
  
  editUser(userid): Observable<any> {
    return this.http.get(`${environment.baseApi}/edit/`+ userid);
  }

  updateuserdata(updatedata : any): Observable<any> {    
    return this.http.post(`${environment.baseApi}/update/` + updatedata.id, updatedata);
  }

}
