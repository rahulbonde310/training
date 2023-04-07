import { Component } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent {
constructor(){
  console.log("Array Component");
  
}
  food = [
    {
      name:"Sandeep",
      mobile:9876543212
    },
    {
      name:"Sagar",
      mobile:123
    },
    {
      name:"Rohit",
      mobile:987
    }
  ]

myName:string = "I am a Angular";

myStatus = true;

}
