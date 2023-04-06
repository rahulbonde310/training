import { Component } from '@angular/core';
import { AllSerService } from '../allServices/all-ser.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {

  constructor(private allSer:AllSerService){
    this.allSer.userName.subscribe(res=>{
      this.userName = res;
    })
  }

  userName:any ;

  updateMyUserName(uname:any){
    //this.userName = uname.value;
    this.allSer.userName.next(uname.value)
  }
}
