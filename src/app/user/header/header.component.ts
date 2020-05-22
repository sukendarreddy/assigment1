import { Component, OnInit, Inject } from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';
import { validateConfig } from '@angular/router/src/config';
import { ProductincService } from 'src/app/productinc.service';

declare var $:any
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']    
})
export class HeaderComponent implements OnInit {
  registrationdata
  total_cat_item:number;catdata:Object
  constructor(@Inject(DbservicesService) public ser,@Inject(ProductincService) public sr) { 
    this.ser.setgetcat().subscribe(dt=>{
      this.catdata=dt
    })
    this.sr.current_value.subscribe(dt=>{
      this.total_cat_item=parseInt(dt)
      //alert(dt)       
    })
  }
ngOnInit() {
  if(localStorage.getItem("aut"))
  {
    this.firstname=localStorage.getItem("fn")
  this.tmp=false;
  }
  else{
    this.tmp=true;
  }  
  
}
  

 
//Registration insert
firstname;
  lastname;
  email;
    password;
    mobileno;
  Gender;
  Adrees1;
  registraiondata;
  com_str
registrationinsert(fref){
  var obj=    {fname:this.firstname,
            lname:this.lastname,
            password:this.password,
           gender:this.Gender,
            mobileno:this.mobileno,
            email:this.email,
            Adrees1:this.Adrees1,
            active:0}
this.ser.registration(obj).subscribe(dt=>{
  
  //this.registraiondata=dt;
 // alert("hai")
  this.tmp2=true
  this.com_str='Registration Success you want auto login click on button'
  $("#regdiv").modal("hide")
  //alert("hai")
  $("#afterreg").modal("show")
})

}
//funhide afterlogin()
fun_hide_afterlogin(){
  this.tmp=false

}
//Login Function 
varemail;
varpassword;
logindata;
pop_login;
tmp:boolean=true;
uname;
funlogin(){
  this.tmp2=true
  var obj={email:this.varemail,password:this.varpassword}
  this.ser.login(obj).subscribe(dt=>{
  //alert("hai")
    this.logindata=dt; 
               
//console.log(dt.res)
if(dt.res.length==1){
  //alert("hai2")
  if(dt.res.active==0){
    alert("Your Account not Activated")
    this.com_str="Your Account not Activated"
    $("#afterreg").modal("show")
  
  }
  if(this.varemail==undefined && this.varpassword==undefined){
    this.com_str="Please Enter Email & Password";
  //alert(this.com_str)
      $("#afterreg").modal("show")
  }
  else{
     //alert("login Successfully")
    localStorage.setItem("aut","1")
    localStorage.setItem("token",dt.res.tok)
    localStorage.setItem("fn",dt.res.fname)
    this.firstname=localStorage.getItem("fn")
    //alert(this.logindata)
     this.uname=dt.res.fname
  $("#login").modal("hide")
  this.fun_hide_afterlogin();
  if(localStorage.getItem("prod")){
    var str=localStorage.getItem("prod")
    var arr:any[]=str.split("**")
    var newproarr=[]
    for(var i=0;i<arr.length;i++){
      var obj=JSON.parse(arr[i])
      obj.tok=localStorage.getItem("token")
      newproarr.push(obj)
    }
    //alert(newproarr)
    this.ser.storecartdataafterlogin(newproarr).subscribe(dt=>{
//alert("data is posting to db")
      //alert(dt)
    })
  }
  }             

}
else{
  //alert("ahi")
  this.com_str="Invalid Email/Password";
  //alert(this.com_str)
      $("#afterreg").modal("show")

}
  })

}
tmp2:boolean=false
//Autologin
autologindata
funautologin(){
 //alert("hi1")
var obj={email:this.email,password:this.password}
this.ser.login(obj).subscribe(dt=>{
  this.autologindata=dt
  //alert("hi2")

  console.log(dt.res)
  //alert("hai3")
  if(dt.res.length==1){
    //alert("hi3")
    console.log(dt.res.length)
    //alert(dt.res.active)
    if(dt.res.active==0){
      //alert("Your Account not Activated")
      this.com_str="Your Account not Activated"
      $("#afterreg").modal("show")
    }
    else{
      $("#afterreg").modal("hide")
      this.fun_hide_afterlogin()
    }
   
  }
  

})
}
//forgotpassword for Loginpage
forgotpass(){
  // alert("hai")
  $("#forgotpassword").modal("show")
  $("#login").modal("hide")
}
//Recovery password

Recoverypassword(){
  alert("hai1")

  var obj={email:this.varemail}
  this.ser.recoverypass(obj).subscribe(dt=>{
    alert(dt)

  })
}
textsearch
searchdata
textsearch1=""
searchtmp:boolean=false
//Search Product data
search(){
  var obj={productname:{$regex:this.textsearch},catid:parseInt(this.textsearch1)}
  this.ser.productgetforsearch(obj).subscribe(dt=>{
    if(dt.length>0){
      this.searchtmp=true
      this.searchdata=dt
    } else{
      this.searchtmp=false
    }
    })
  }
}
