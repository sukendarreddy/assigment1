import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DbservicesService } from 'src/app/dbservices.service';
import { ProductdataComponent } from '../productdata/productdata.component';
import { ProductincService } from 'src/app/productinc.service';
declare var $:any
@Component({
  selector: 'app-viewcart',
  templateUrl: './viewcart.component.html',
  styleUrls: ['./viewcart.component.css']
})
export class ViewcartComponent implements OnInit {

  constructor(@Inject(DbservicesService) public ser,@Inject(Router)public at,@Inject(ProductincService)public sr) { }

 //tmp:boolean=true;
  productdata;
  //allproductsArry
    ngOnInit() {
      if(localStorage.getItem("aut"))
      this.fungetproductdataafterlogin()
      
      
      else
      {
     var str=localStorage.getItem("prod")
        var productarr:any=[]
        var allproductsArry=str.split("**")
        if(allproductsArry.length==0){
this.tmp=false
        }
        else{
          this.tmp=true
          for(var i=0;i<allproductsArry.length;i++){
            var productobj=JSON.parse(allproductsArry[i])
            productarr.push(productobj)
          }
          this.productdata=productarr     
          this.funtotal()
        }
      }
    }
    totalamount:number=0;
//Remove the Cart
tmp:boolean=true
    funcartremove(pro){
     // alert(pro)
      this.productdata=this.productdata.filter(function( obj ){
       //alert(obj.pid)
        return obj.pid != pro
      })
      this.sr.funnext(this.productdata.length-1)
      if(this.productdata.length==0)
       this.tmp=false
      var str=JSON.stringify(this.productdata).split("},").join("}**")
      str=str.split("[").join("").split("]").join("")
      localStorage.setItem("prod",str)
      this.funtotal()
  
    }

// Add the total Amount
funtotal(){
 // alert("to1")

  for(var i=0;i<this.productdata.length;i++){
   // alert("tol2")
    
var Totalprice=this.productdata[i].userqty*this.productdata[i].price
this.productdata[i].prototal=Totalprice
  this.totalamount+=Totalprice
  //alert(this.totalamount)      
  }
}


//fun getdata after login
fungetproductdataafterlogin(){
  this.ser.getcartdatainafterlogin().subscribe(dt=>{
    this.productdata=dt;
    this.sr.funnext(this.productdata.length-1)
    localStorage.removeItem("prod")
    this.funtotal()
  })
}
//funUpdateQty
funUpdateQty(pid,conid){
  if(localStorage.getItem("prod")){
  var cid="txt"+conid
  var cont=<HTMLInputElement>document.getElementById(cid)
  var quantity:number=parseInt(cont.value)
  
  //alert(quantity)
  }
  else{
var cid="txt"+conid
 var cont=<HTMLInputElement>document.getElementById(cid)
var localdata=localStorage.getItem("prod")
  var arr:any[]=localdata.split("**")
  var newobj=JSON.parse(arr[conid])
  if(cont.value=='0')
      {
        cont.value='1'
      }
      else if(cont.value>newobj.quantity)
      {
        var tmp=parseInt(cont.value)-1
        cont.value=tmp.toString()
        var cur_val=$("#sp"+conid).html()
        $("#sp"+conid).html(" Quantity Exceeded")
        setTimeout(function(){
         $("#sp"+conid).html("")
        },2000)
      }

else{
  var str:string=""
  for(var i=0;i<arr.length;i++)
  {
    var obj=JSON.parse(arr[i])
    if(obj.pid==pid)
    {
      obj.userqty=cont.value
      this.productdata[i].userqty=cont.value
    }
  str+=JSON.stringify(obj)
  if(i!=arr.length-1)
  str+="**"
  }
  localStorage.setItem("prod",str)
  this.totalamount=0;
  this.funtotal()
  }


}
}
}