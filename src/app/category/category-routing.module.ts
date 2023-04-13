import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddcategoryComponent } from './addcategory/addcategory.component';

const routes: Routes = [
  {path:'add-category', component:AddcategoryComponent },
  {path:'add-category/:id', component:AddcategoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
