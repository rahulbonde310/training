import { Component, NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AngularDevelopmentComponent } from './angular-development/angular-development.component';
import { ArrayComponent } from './array/array.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ParentComponent } from './parent/parent.component';
import { ProductsComponent } from './products/products.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { SignupdataComponent } from './signupdata/signupdata.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { MainComponent } from './main/main.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp1Module } from './comp1/comp1.module';
import { CategoryComponent } from './category/category.component';
import { AddcategoryComponent } from './category/addcategory/addcategory.component';




const routes: Routes = [
 // {path:'aboutus', component:AboutComponent}, // without lazy loading
  // {path:'aboutus', loadChildren:() => import('../about/about')}
  //with lazy loading

  {path:'', component:HomeComponent},
  {path:'signup', component:SignupComponent},
  {path:'login', component:LoginComponent},
  {path:'array', component:ArrayComponent},
  {path:'parent', component:ParentComponent},
  
  
  {path:'services', children:[
    {path:'', component:ServicesComponent},
    {path:'angular', component:AngularDevelopmentComponent}
  ]},
  {path:'signupdetails', component:SignupdataComponent},
  {path:'contact', component:ContactComponent},
  {path:'template-driven', component:TemplateDrivenComponent},
  {path:'reactive-form', component:ReactiveFormComponent},
  {path:'products', component:ProductsComponent},
 { path: 'about', component:AboutComponent },
 {path:'main', component:MainComponent},


 {path:'category', component:CategoryComponent,
  children:[
    {path:'', component:AddcategoryComponent}
  ]},
 

  {path:'comp1', loadChildren:()=>import('./comp1/comp1.module').then(m=>m.Comp1Module)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
