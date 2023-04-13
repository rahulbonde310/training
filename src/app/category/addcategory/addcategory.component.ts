import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AllSerService } from 'src/app/allServices/all-ser.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.css']
})
export class AddcategoryComponent implements OnInit {
  constructor(private router:Router, private http:HttpClient, private allSer:AllSerService, private route:ActivatedRoute){}
  categoryForm!:FormGroup;
id:any;

ngOnInit(){
  this.categoryForm = new FormGroup({
    category: new FormControl(''),
    description: new FormControl('')
  })
  
//this.id = this.route.snapshot.params['id'];
//console.log(this.id)
   this.allSer.getCatEdit(this.route.snapshot.params['id']).subscribe(res=>{
     this.categoryForm.setValue(res)
   })

}

  AddCategory(){
    this.http.post('http://localhost:3000/category', this.categoryForm.value).subscribe(res=>{
      this.router.navigateByUrl('category')
    })
  } 


}


//get post put splic