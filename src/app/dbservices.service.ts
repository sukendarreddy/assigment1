import { Injectable,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
declare var $:any

@Injectable({
  providedIn: 'root'
})
export class DbservicesService {
constructor(@Inject (HttpClient) public ht,@Inject(Router) public at) { }
  
//getcatDetails
setgetcat():object[]{
    return this.ht.get("catref/getcat")
  }


  //insertcat
   setpostcat(obj:Object):Observable<Object>{
      return this.ht.post("catref/insertcat",obj)
}



//getsubcatdata
setgetsubcat(){
  return this.ht.get("subcatref/getsubcat")
}


//insertsubcat
setpostsubcat(obj:Object):Observable<Object>{
   return this.ht.post("subcatref/inssubcat",obj)
}


//getsubsubcat
setgetsubsubcat(){
  return this.ht.get("subsubcatref/getsubsubcat")
}

//insertsubsubcat
setinsertsubsubcat(obj){
  return this.ht.post("subsubcatref/insertsubsubcat",obj)
}



//catid
setsubcat_based_catid(obj){
  return this.ht.post("subcatref/catidgetting",obj)
 
}


//subcatid
setsubsubcat_based_subcatid(obj){
  return this.ht.post("subsubcatref/subcatidgetting",obj)
}


//getproduct
productget(){
  return this.ht.get("prodref/getproduct")
}


//insert product data 
productgetforsearch(obj){
 //
  return this.ht.post("prodref/getproductforsearch",obj)
}

//productinsert
productinsert(obj){
  return this.ht.post("prodref/insertproduct",obj)
}

//subsubcatid
getproductdata(obj){
  return this.ht.post("prodref/productbasedsubsubcatid",obj)
}
     
//productid
getproductid(obj){
 
  return this.ht.post("prodref/productid",obj)   
}

//registration
registration(obj){
  return this.ht.post("regisration/registrationinsert",obj)    
}


//login
login(obj){
  return this.ht.post("regisration/logininsert",obj)
}

//loginprofiledata
loginprofiledata(obj){
   return this.ht.post("regisration/profiledata",obj)
 }

//Edit My Account Details
myaccountedt(obj){
   return this.ht.post("regisration/editmyaccountt",obj)
}


 

getdealofday(){
 
  return this.ht.get("prodref/producttype")
}


//latest products
getlatestproducts(){
  return this.ht.get("prodref/productlatest")
}


//get upcomming products
getupcomming(){
  return this.ht.get("prodref/productupcomming")
}

    
//after Login store data                    
storecartdataafterlogin(obj){
  //alert("service is posing data")
  return this.ht.post("catitem/storecartdata",obj)
}
       


getcartdatainafterlogin(){
  //alert("hai1")
var obj={token:localStorage.getItem("token")}    
//alert(obj)
return this.ht.post("catitem/getcartdata",obj)
}

//Procced to pay
funproceed()
{
  if(localStorage.getItem("aut")){    
   this.at.navigateByUrl("user/bill")                    
  }else{     
    $("#login").modal("show")                  
  }            
}
              }
     




