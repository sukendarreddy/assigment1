import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import{FormsModule} from "@angular/forms";

export var obj:Routes=[
  
  {path:"",redirectTo:"user",pathMatch:"full"},
{path:"admin",loadChildren:"./admin/admin.module#AdminModule"},
{path:"user",loadChildren:"./user/user.module#UserModule"}
]
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(obj),BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
