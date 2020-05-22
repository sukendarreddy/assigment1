import { Component, OnInit, Inject } from '@angular/core';
import { DbservicesService } from '../../dbservices.service';
import{serverhost} from "../../settings"
import{ActivatedRoute} from "@angular/router"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(@Inject(DbservicesService) public ser,public ra:ActivatedRoute) { 
    this.productget()
    this.varserverhost=serverhost;
    this.ra.params.subscribe(dt=>{
      if(dt.status){
        if(dt.status==1)
{
  alert("product inserted")
} else
alert(dt.status)
      }
    
    })
  }
  varserverhost;
varcatdata:Object[]
varsubcatdata:Object[]
varsubsubcatdata:Object[]
drpcat:string;drpsubcat:string;drpsubsubcat:string
  ngOnInit() {
    this.ser.setgetcat().subscribe(dt=>{
      this.varcatdata=dt
    })
  }
 fungetSubCat(){
    this.ser.setsubcat_based_catid({cat_id:parseInt(this.drpcat)}).subscribe(dt=>{
      this.varsubcatdata=dt
    })
  }

fungetsubsubcat(){
  this.ser.setsubsubcat_based_subcatid({subcat_id:parseInt(this.drpsubcat)}).subscribe(dt=>{
    this.varsubsubcatdata=dt
  })
}
product_data:Object[]
productget(){
 // alert("before fun")
  this.ser.productget().subscribe(dt=>{
    //alert("after fun")
    this.product_data=dt;
  })
}
_id:Object[];
productname;
pbrand;
productprice;
productoldprice;
producttype;
productrating;
productdisc;
productcolor;
product_desc;
quantity;
productoffer
productinsert(){
//left side database
//right side 2 way data binding
  var obj={_id:this._id,
  productname:this.productname,
  pbrand:this.pbrand,
  productPrice:this.productprice,
  productoldprice:this.productoldprice,
producttype:this.producttype,
productdisc:this.productdisc,
productrating:this.productrating,
productoffer:this.productoffer,
productcolor:this.productcolor,
quantity:parseInt(this.quantity),
product_desc:this.product_desc,
catid:parseInt(this.drpcat),
subcatid:parseInt(this.drpsubcat),
subsubcatid:parseInt(this.drpsubsubcat)}


  this.ser.productinsert(obj).subscribe(dt=>{
   //alert(dt.res)
   var formref=<HTMLFormElement>document.getElementById("frm1")
   formref.submit()
   this.productget()
   
    
  })

}

productupdate(){
  var oldobj={"_id":this._id}
  var newobj={$set:{"productname":this.productname,
              "productPrice":this.productprice,
              "producttype":this.producttype,
            "productrating":this.productrating,
          "productcolor":this.productcolor,
        "quantity":this.quantity,
      "catid":this.drpcat,
    "subcatid":this.drpsubcat,
  "subsubcatid":this.drpsubsubcat}}
  this.ser.productupdate([oldobj,newobj]).subscribe(dt=>{
    this.productget()
  })
}

temp=0;
selectdata;
funedit(seldata){
  this.temp=seldata._id;
  this.selectdata=seldata
  console.log(this.selectdata)
}


}



  