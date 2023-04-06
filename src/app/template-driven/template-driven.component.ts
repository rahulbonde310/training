import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {
  password='';
  gender=[
    {id:'Male', value:'Male'},
    {id:'Female', value:'Female'}
  ]
  onSubmit(Form:NgForm){
    
    console.log(Form)
  }
  show=false;

  showMyPassword(pass:any){
    this.password
    this.show = true
    pass.type = pass.type==='password'? 'text':'password'
    console.log("demo");
    
  }
}
