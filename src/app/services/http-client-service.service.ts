import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HttpClientService {

  userToken = localStorage.getItem("token");
  //userToken = "userToken";

  constructor(private http: HttpClient) { }

  get(url) {
    return this.http.get(url, {
      headers : {Authorization : this.userToken},
      observe: 'response'
    });
  }

  post(url, data) {
    return this.http.post(url, data, {
      headers : {Authorization : this.userToken},
      observe: 'response'
    })
  }
}
