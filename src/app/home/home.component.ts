import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
constructor(private router:Router){
  
}
userEmail:any;
ngOnInit(){
  this.userEmail = localStorage.getItem('email')
}

food:any=[];
myAmt:number = 24000;
pushMyFoodName(foodBox:any){
  this.food.push(foodBox.value)
  console.log(this.food)

  if(this.food.length>4){
    //this.router.navigateByUrl('services')
  }
  
}



onRemove(item:any){
  //console.log(this.food.splice(item, -1))
  this.food.splice(item, 1)
}

}
