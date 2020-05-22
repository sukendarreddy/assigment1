import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbservicesService } from 'src/app/dbservices.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
varsubsubcatid;
  constructor(@Inject(ActivatedRoute) public ar,@Inject(DbservicesService) public ser) {
    this.ar.params.subscribe(dt=>{
      this.varsubsubcatid=dt.subsubcatid
      this.getproductdata()
      //this.ser
    })
   }
   productdata;
   fullstars=[];emptystars=[]
 getproductdata(){
   //alert("hai")
   var obj={subsubcatid:parseInt(this.varsubsubcatid)}
   this.ser.getproductdata(obj).subscribe(dt=>{
     this.productdata=dt
     for(var i=0;i<this.productdata.length;i++)
     {
       this.fullstars=[]
       this.emptystars=[]
       for(var j=1;j<=this.productdata[i].productrating;j++)
       {
         this.fullstars.push('hi')
       }
       this.productdata[i].ratarr=this.fullstars;
       for(let j=this.productdata[i].productrating;j<5;j++)
       {
         this.emptystars.push('hi')
       }
       this.productdata[i].emparr=this.emptystars;
       
     }
          
        })
   
 }


  ngOnInit() {
  }

}
