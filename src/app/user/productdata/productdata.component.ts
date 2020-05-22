import { Component, OnInit ,Inject, Input} from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductincService } from 'src/app/productinc.service';
declare var $:any;
@Component({
  selector: 'app-productdata',
  templateUrl: './productdata.component.html',
  styleUrls: ['./productdata.component.css']
})
export class ProductdataComponent implements OnInit {
var_product_data;
varproductid;
  constructor(@Inject(DbservicesService)public ser,@Inject(ActivatedRoute) public ar,@Inject(Router) public at,@Inject(ProductincService)public sr) {
    this.ar.params.subscribe(dt=>{
      this.varproductid=dt._id

      alert(this.varproductid)
     

    }
  ) 
  this.productid()
}
   // alert("hai1")
   fullstars=[];
   emptystars=[];
   offers:string[];
   userqty:number=1;
   totalqty:number
   productid(){
    
     var obj={_id:parseInt(this.varproductid)}
    this.ser.getproductid(obj).subscribe(dt=>{
     
      this.var_product_data=dt[0];
      this.bigimg=this.var_product_data.images[0]
      this.offers=this.var_product_data.productoffer.split(",")
      this.totalqty=this.var_product_data.quantity

      // for(var i=0;i<this.var_product_data.length;i++)
      // {
      //   this.fullstars=[]
      //   this.emptystars=[]
      //   for(var j=1;j<=this.var_product_data.productrating;j++)
      //   {
      //     this.fullstars.push(j)
      //   }
      //   this.var_product_data[i].ratarr=this.fullstars;
      //   for(let j=this.var_product_data.productrating;j<5;j++)
      //   {
      //     this.emptystars.push(j)
      //   }
      //   this.var_product_data.emparr=this.emptystars;
        
      // }

      for(var i=0;i<this.var_product_data.length;i++)
      {
        this.fullstars=[]
        this.emptystars=[]
        for(var j=1;j<=this.var_product_data[i].productrating;j++)
        {
          this.fullstars.push('hi')
        }
        this.var_product_data[i].ratarr=this.fullstars;
        for(let j=this.var_product_data[i].productrating;j<5;j++)
        {
          this.emptystars.push('hi')
        }
        this.var_product_data[i].emparr=this.emptystars;
        
      }




      
    })

  }

 
bigimg
  funimg(x){
this.bigimg=x
  }


  //addtocart 
  total_cat_item:number
  funaddcart(){
   // alert("hai")
this.ser.emailreview().subscribe(dt=>{

})
  // alert("hai")
    var obj:any={pid:this.var_product_data._id,pname:this.var_product_data.productname,
      price:this.var_product_data.productPrice,quantity:this.var_product_data.quantity,
      image:this.var_product_data.images[0],userqty:this.userqty}
  if(localStorage.getItem("aut")){
      obj.tok=localStorage.getItem("token")
      this.ser.storecartdataafterlogin(obj).subscribe(dt=>{
        this.at.navigateByUrl("user/viewcart")
})         
    }
    else{   
     // alert("hai")
      if(localStorage.getItem("prod")){
     var localdata=localStorage.getItem("prod")
   var str1='"pid":'+this.var_product_data._id
   
   if(localdata.match(str1)!=null){
   // alert("haiiii")  
     var  str=""
     var arr=localdata.split("**")
     for(var i=0;i<arr.length;i++){ 
            
       var nobj=(JSON.parse(arr[i]))
       if(nobj.pid==this.var_product_data._id)
       {
         
        nobj.userqty=nobj.userqty+this.userqty
       }
str+=JSON.stringify(nobj)
if(i!=arr.length-1)
str+="**"
     }
     localStorage.setItem("prod",str)
   }
   else{
    //alert("hai2")
     localdata=localdata+"**"
     localdata=localdata+JSON.stringify(obj)
     localStorage.setItem("prod",localdata)
   }}
   else{
    localStorage.setItem("prod",JSON.stringify(obj))
  }
  this.sr.current_value.subscribe(dt=>{
    this.total_cat_item=parseInt(dt)
  })

this.sr.funnext(this.total_cat_item)
}


  }
 
  funqty(){
   if(this.userqty<1){
  this.userqty=1
  }
   else{
     if(this.userqty>this.totalqty){
       $("#tooltip-2").css("display","inline-block")
       this.userqty=this.totalqty
     }
     else{
       $("#tooltip-2").css("dispay","none")
    }
   }
  }
  
  ngOnInit() {
    $("#document").ready(function(){
      $("#tooltip-2").tooltip()
    })
   
  }

//Wishlist Storage
pid
storeproductdetails(){
  if(localStorage.getItem("aut")){
var obj={pid:this.var_product_data._id,pname:this.var_product_data.productname,pricenew:this.var_product_data.productPrice,productoldprice:this.var_product_data.productoldprice,pbrand:this.var_product_data.pbrand,
    image:this.var_product_data.images[0],length:1}
    
    this.ser.storeproductdetailss(obj).subscribe(dt=>{
   }
  
    )

} }
//Email Review

} 






