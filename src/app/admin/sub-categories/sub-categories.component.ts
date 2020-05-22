import { Component, OnInit ,Inject} from '@angular/core';
import { DbservicesService } from '../../dbservices.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.css']
})
export class SubCategoriesComponent implements OnInit {
  catdata:Object[]
  constructor(@Inject(DbservicesService) public ser) { 
   
    this.ser.setgetcat().subscribe(cdata=>{
      
      this.catdata=cdata
    })
    this.fun_get_subcat()
  }
  

  ngOnInit() {
  }
 var_get_data:object[];
 fun_get_subcat(){
 // console.log("i am from component1")
   this.loadtmp=true
    this.ser.setgetsubcat().subscribe(dt=>{
     // console.log("i am from component2")
      this.var_get_data=dt
      this.loadtmp=false
      this.temp=0;
 })
   }
  
   temp=0;
   selectdata;
   funedit(seldata){
     this.temp=seldata._id;
     this.selectdata=seldata
     console.log(this.selectdata)
   }
   //image loading
   loadtmp:boolean=false
 
   //for update
 
   funsubupdate(){
    this.loadtmp=true
 var oldobj1={"_id":this.selectdata._id}
 var newobj2={$set:{"subcatname":this.selectdata.subcatname,
                    "cat_id":parseInt(this.selectdata.cat_id),
                    "Active":parseInt(this.selectdata.Active)}}
 this.ser.setupdatesubcat([oldobj1,newobj2]).subscribe(dt=>{
  console.log("hai")
  this.fun_get_subcat()
  
 })
   } 
     
    
   
   //insert..
  txtsubcat:string;
drpcat:string="";

   funinsert(){
     this.loadtmp=true 
     var obj={subcatname:this.txtsubcat,cat_id:parseInt(this.drpcat),Active:1}
     this.ser.setpostsubcat(obj).subscribe(dt=>{
       //alert(dt.result)
       this.txtsubcat=""
       this.drpcat=""
       this.fun_get_subcat()
     })
   }
 
   //sorting
   key: string = 'name'; //set default
   reverse: boolean = false;
   sort(key){
     this.key = key;
     this.reverse = !this.reverse;
   }
   
   //initializing p to one
   p: number = 1;
}


