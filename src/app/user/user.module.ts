import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { UsercommonComponent } from './usercommon/usercommon.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { OrderModule } from 'ngx-order-pipe';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { ImageZoomModule} from "angular2-image-zoom";
import { BannerComponent } from './banner/banner.component';
import { Banner2Component } from './banner2/banner2.component';
import { DealofdayComponent } from './dealofday/dealofday.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { FooterpageComponent } from './footerpage/footerpage.component';
import { ProductdataComponent } from './productdata/productdata.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatRadioModule} from '@angular/material/radio';

import { ViewcartComponent } from './viewcart/viewcart.component';
import { LogoutComponent } from './logout/logout.component';



import {RouterguardService} from "./routerguard.service";
import { ErrorComponent } from './error/error.component';



export const obj:Routes=[
  {path:"",component:UsercommonComponent,
  children:[
    {path:"",
    children:[
      {path:"regist",component:RegistrationComponent},
      {path:"",component:FrontpageComponent},
      {path:"showproduct",component:ShowproductComponent},
      
      {path:"header",component:HeaderComponent},
      {path:"productdata",component:ProductdataComponent},
     
      {path:"viewcart",component:ViewcartComponent},      
      {path:"dealofday",component:DealofdayComponent},
      {path:"logout",component:LogoutComponent,canActivate:[RouterguardService]},
          
     
     {path:"err",component:ErrorComponent},
    
   
     
    ]}    
  ]}            
]
@NgModule({
  declarations: [ UsercommonComponent, HeaderComponent, MenuComponent,
     FrontpageComponent, BannerComponent,  Banner2Component,
      DealofdayComponent, ShowproductComponent, FooterpageComponent, ProductdataComponent, 
      RegistrationComponent, ViewcartComponent, LogoutComponent, ErrorComponent
     ],
  imports: [
    CommonModule,RouterModule.forChild(obj),MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule,NgxPaginationModule,Ng2SearchPipeModule,
MatRadioModule,
FormsModule,OrderModule,ImageZoomModule  
  ]
})
export class UserModule { }
