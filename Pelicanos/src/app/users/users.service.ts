import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { isNullOrUndefined } from 'util';
import { UserModel } from '../models/user.model';


const base_url = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root'
})
export class UserService {  

  userInfo = new BehaviorSubject<UserModel>(new UserModel());

  constructor(private http: HttpClient) { }

  tokenId: string = '';

  saveLogginInfo(user: UserModel){
    user.isLogged=true;
    this.getUserInformation
  }

  loginUser(email: string, password: string): Observable<UserModel> {
    
    return this.http.post<UserModel>(`${base_url}Users/login?include=user`,
      {
        email,
        password
      },
      {
        headers: new HttpHeaders({
          "content-type": "application/json"
        })
      });
  }
  isActiveSession(){
    //return this.userInfo.getValue().isLogged;
  }

  getUserInfo(){
    return this.userInfo.asObservable;
  }

  logoutUser(){
    
    localStorage.removeItem("userInfo");
    localStorage.removeItem("userTk");
  }

  saveToken(token) {
    localStorage.setItem("userTk", token);
  }

  getToken() {
    return localStorage.getItem("userTk");
  }

  saveUserInformation(user: UserModel): void {
    localStorage.setItem("userInfo", JSON.stringify(user));
  }

  getUserInformation() {
    let userInfo = localStorage.getItem("userInfo");
    if (isNullOrUndefined(userInfo)) {
      return null;
    }
    return (JSON.parse(userInfo));
  }


}

