import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ArrayComponent } from './array/array.component';
import { HightlightDirective } from './mydeirective/hightlight.directive';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularDevelopmentComponent } from './angular-development/angular-development.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { SignupdataComponent } from './signupdata/signupdata.component';
import { MainComponent } from './main/main.component';
import { Comp2Component } from './comp2/comp2.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ArrayComponent,
    HightlightDirective,
    SidebarComponent,
    ParentComponent,
    ChildComponent,
    ServicesComponent,
    ContactComponent,
    PageNotFoundComponent,
    AngularDevelopmentComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    SignupComponent,
    LoginComponent,
    ProductsComponent,
    SignupdataComponent,
    MainComponent,
    Comp2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log("App Module");
    
  }
}
