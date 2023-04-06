import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  food:string[]=[];
  addFood(foodItem:any){
        this.food.push(foodItem)
        console.log(this.food)
  }
  removeItem(index:number){
    this.food.splice(index, 1)
  }
}
