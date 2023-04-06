import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})

export class ReactiveFormComponent implements OnInit{
  reactiveTitle:string = "Reactive Form !";

  constructor(private router:Router){}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(6)])
  })

  myDetails = [
    {
      id:1,
      username:'sandeep',
      email:'sandeep@gmail.com',
      password:'123456'
    },
    {
      id:2,
      username:'Kalpesh',
      email:'Kalpesh@gmail.com',
      password:'123456'
    },
    {
      id:3,
      username:'Harry',
      email:'Harry@gmail.com',
      password:'123456'
    },
    {
      id:4,
      username:'Rohit',
      email:'Rohit@gmail.com',
      password:'123456'
    }
  ]

  myLoginForm(){
    console.log(this.loginForm.value);

    this.router.navigateByUrl('')
    //this.router.navigate(['aboutus'])

  }

  ngOnInit(){
 
  }

  get email(){ 
    return this.loginForm.get('email');
  }

  updateMyDetails(rowdetails:any){
    //console.log(rowdetails);
    
    this.loginForm.patchValue({
      username:rowdetails.username,
      email:rowdetails.email,
      password:rowdetails.password
    })
  }
 

}
