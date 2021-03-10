import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private http: HttpClient) { }

  //userToken = localStorage.getItem("userToken");
  userToken = "userToken";

  get(url){
    return this.http.get(url, {
      headers : {Authorization : this.userToken}
    });
  }

  post(url, data){
    return this.http.post(url, data, {
      headers : {Authorization : this.userToken}});
  }
}
