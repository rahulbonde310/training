import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categories:any;
  
  constructor(private http:HttpClient, private router:Router){}

  ngOnInit(){
    this.http.get<any>('http://localhost:3000/category').subscribe(res=>{
      this.categories = res;
      console.log(res)
    })
  }

  addCategory(id:any){
    this.router.navigateByUrl('/add-category/'+id)
    console.log(id)
  }
}
