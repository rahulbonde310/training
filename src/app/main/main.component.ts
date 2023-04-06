import { Component, OnInit } from '@angular/core';
import { AllSerService } from '../allServices/all-ser.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{
  constructor(private allSer:AllSerService){
    
  }
  userName:any;

  ngOnInit(){
    this.allSer.userName.subscribe(res=>{
      this.userName = res;
    })
  }
}
