import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';


const headers = new HttpHeaders()
.set('content-type','application/json')
.set('Access-Control-Allow-Origin','*')


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

  getCatEdit(categoryId:any){
    this.url = this.apiPath;
    return this.http.get<any>(this.url+'category/'+categoryId)
  }

  fetchProduct(){
    this.url = this.api;
    return this.http.get<any>(this.url+'products', {headers:headers})
  }

  userName = new Subject<any>();
  
  //userName = new BehaviorSubject("enterIT Training Center")
}
