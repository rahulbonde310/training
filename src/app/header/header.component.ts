import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private router:Router){

  }
isLogin:any = 0;

ngOnInit(){
  if(localStorage.getItem('loginid')){
    this.isLogin = localStorage.getItem('loginid')
  }
}
  logout(){
    localStorage.removeItem('email')
    localStorage.removeItem('loginid')
    this.router.navigateByUrl('/signup')
  }
}
