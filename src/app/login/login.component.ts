import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AllSerService } from '../allServices/all-ser.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  msg:any
  constructor(private http:HttpClient, private router:Router, private allSer:AllSerService){

  }


  loginTitle="Login";
  loginForm:any;

ngOnInit(){
  //login form group
  this.loginForm = new FormGroup({
    email : new FormControl(''),
    password: new FormControl('')
  })
  this.myloginDetails();
}

// login code

myloginDetails(){
  console.log("success");
  
  this.allSer.signUpSubmit().subscribe(res=>{
    console.log(res)
  })
}


  loginDetails(){
    
    this.http.get<any>('http://localhost:3000/userProfile').subscribe(res=>{
      //console.log(res)
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email  && a.password ===this.loginForm.value.password
      })
      console.log(user.email);
      if(user.email){
        this.loginForm.reset()
        localStorage.setItem('email', user.email);
        localStorage.setItem('loginid','1')
        this.router.navigate(['']);
        
      }else{
        this.msg = "your username or password is incurrect!"
      }
    })
  }
}
