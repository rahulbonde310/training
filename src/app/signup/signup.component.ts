import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{
  signUpForm:any;

constructor(private formBuilder:FormBuilder, private http:HttpClient, private router:Router){}
  ngOnInit(){
 
    this.signUpForm = this.formBuilder.group({
      name:[''],
      email:[''],
      password:[''],
      education:[''],
      city:['']
    })
  }

  signup(){
    //console.log(this.signUpForm.value);
    this.http.post<any>('http://localhost:3000/userProfile', this.signUpForm.value).subscribe(res=>{
      console.log(res)
      this.signUpForm.reset();
      this.router.navigate(['login']);      
    })
    
  }

  
}
