import { Component } from '@angular/core';
import { AllSerService } from '../allServices/all-ser.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  constructor(private allSer:AllSerService){
    
  }

  userName:any;

  ngOnInit(){
  this.allSer.userName.subscribe(res=>{
    this.userName = res; 
  })
}
  updateMyUserName(uname:any){
    this.allSer.userName.next(uname.value)
  }
}
