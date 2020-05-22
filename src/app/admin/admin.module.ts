import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmincommonComponent } from './admincommon/admincommon.component';

import { Routes, RouterModule } from '@angular/router';
import {NgxPaginationModule} from "ngx-pagination";
import{MatInputModule} from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import{CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MatButtonModule} from '@angular/material/button'; 
import {FormsModule} from "@angular/forms";
import {MatSelectModule} from '@angular/material/select';
import { CategoriesComponent } from './categories/categories.component';
import { SubCategoriesComponent } from './sub-categories/sub-categories.component';
import { SubSubCategoriesComponent } from './sub-sub-categories/sub-sub-categories.component'; 
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';
import { ProductComponent } from './product/product.component';

var obj:Routes=[
  {path:"",component:AdmincommonComponent,
  children:[
    {path:"",
    children:[
      {path:"Categories",component:CategoriesComponent},
      {path:"Subcategories",component:SubCategoriesComponent},
      {path:"SubSubCategories",component:SubSubCategoriesComponent},
      {path:"product",component:ProductComponent}
    ]}
  ]}
]

@NgModule({
  declarations: [AdmincommonComponent, CategoriesComponent, SubCategoriesComponent, SubSubCategoriesComponent, ProductComponent],
  imports: [
    CommonModule,RouterModule.forChild(obj),MatFormFieldModule,MatInputModule,MatButtonModule,MatSelectModule,NgxPaginationModule,Ng2SearchPipeModule,
    FormsModule,OrderModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]

})
export class AdminModule { }
