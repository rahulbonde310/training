import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp1Component } from './comp1.component';
import {  RouterModule, Routes } from '@angular/router';
import { Compon1Component } from './compon1/compon1.component';


const xyz:Routes = [
  {path:'', component:Comp1Component, children:[
      {path:'mynewcom', component:Compon1Component}
  ]},
]

@NgModule({
  declarations: [
    Comp1Component,
    Compon1Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(xyz)
  ]
})
export class Comp1Module {
  constructor(){
    console.log("Component Load");
    
  }
  
 }

