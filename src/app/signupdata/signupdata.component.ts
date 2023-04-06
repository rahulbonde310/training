import { Component, OnInit } from '@angular/core';
import { AllSerService } from '../allServices/all-ser.service';


@Component({
  selector: 'app-signupdata',
  templateUrl: './signupdata.component.html',
  styleUrls: ['./signupdata.component.css']
})
export class SignupdataComponent implements OnInit{
  constructor(private allSer:AllSerService){

  }
  myUserDetails:any;
  ngOnInit(){
    this.allSer.signUpSubmit().subscribe(res=>{
      this.myUserDetails = res;
      console.log(res)
    })
  }
}
