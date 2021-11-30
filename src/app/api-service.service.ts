import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { User } from './user';
import { reject } from "q";
//import {UserService} from 'src/app/user.service'
   
 
 
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  private apiURL = "http://127.0.0.1:8000/api/";
  token: any;
  private static SAVED_USER_STORAGE_KEY = 'currentuser';

  
 
  constructor(private httpClient: HttpClient){
      //private userService: UserService)
  }
   
   postData(url, data) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': 'Bearer '+this.token
      })
    }
    return this.httpClient.post(this.apiURL+url+'/', data, httpOptions);
    }

    getToken(token) {
      this.token = token;
    }
 
    sendToken() {
      return this.token;
    }


    /*postData(url, data) : Promise<boolean> {
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Access-Control-Allow-Origin': '*',
          'Authorization': 'Bearer '+this.token
        })
      }
      return new Promise((resolve) => {

          this.userService.getUserForUsername(data.name).then(user => {
              if (user) {
                  localStorage.setItem(ApiServiceService.SAVED_USER_STORAGE_KEY, name);
                  resolve(true);
              } else {
                  resolve(false);
              }
          });
          
          
          return this.httpClient.post(this.apiURL+url+'/', data, httpOptions);
      });
  }

  logout() {
      localStorage.removeItem(ApiServiceService.SAVED_USER_STORAGE_KEY);
  }
  
  isLoggedIn() {
      return localStorage.getItem(ApiServiceService.SAVED_USER_STORAGE_KEY);
  }

  getCurrentUser() : Promise<User> {
      return new Promise((resolve) => {
          const currentUserUsername = localStorage.getItem(ApiServiceService.SAVED_USER_STORAGE_KEY);

          if (currentUserUsername) {
              this.userService.getUserForUsername(currentUserUsername).then(user => {
                  resolve(user);
              });
          } else {
              reject(null);   
          }
      });
  }*/
}