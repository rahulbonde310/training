import { Component, OnInit } from '@angular/core';
import { AllSerService } from '../allServices/all-ser.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
constructor(private allSer:AllSerService){}
myProduct:any;
ngOnInit(){
  this.getProductDetails()
}

  getProductDetails(){
    this.allSer.fetchProduct().subscribe(res=>{
      console.log(res)
      this.myProduct = res;
    })
  }

}
