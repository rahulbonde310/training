import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input('food') foodArr!:string[]; // parent to child tranfer value

@Output('DelEvt') removeItem = new EventEmitter<number>(); // child to parent 


removeFood(index:number){
  this.removeItem.emit(index)
}
}


