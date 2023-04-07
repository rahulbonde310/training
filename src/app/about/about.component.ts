import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  constructor(){
    //console.log("About Component");
  }

  title = "I'm a title";
  ngOnInit() {
    
  }
  
}
