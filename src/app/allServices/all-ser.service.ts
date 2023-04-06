import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllSerService {
url:any;
  constructor(private http:HttpClient) { }

  apiPath = "http://localhost:3000/";
  api = "https://fakestoreapi.com/";

  signUpSubmit():Observable<any>{
    this.url = this.apiPath;
    return this.http.get<any>(this.url+'userProfile')
  }

  fetchProduct(){
    this.url = this.api;
    return this.http.get<any>(this.url+'products')
  }

  userName = new Subject<any>();
  
  //userName = new BehaviorSubject("enterIT Training Center")
}
