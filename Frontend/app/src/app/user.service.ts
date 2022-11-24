import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  AddUser(userDetails:any): Observable<any> {
    let API_URL = 'http://localhost:3001/users/register';
    return this.http.post(API_URL, userDetails)
  }

  UserLogin(loginDetails:any): Observable<any> {
    let API_URL = 'http://localhost:3001/users/login';
    return this.http.post(API_URL, loginDetails)
  }
}
