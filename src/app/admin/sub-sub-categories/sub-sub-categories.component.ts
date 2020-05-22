import { Component,Inject } from '@angular/core';
import { DbservicesService } from '../../dbservices.service';
@Component({
  selector: 'app-sub-sub-categories',
  templateUrl: './sub-sub-categories.component.html',
  styleUrls: ['./sub-sub-categories.component.css']

})
export class SubSubCategoriesComponent {
  catdata:Object[]
  constructor(@Inject(DbservicesService) public ser) { 
   
    this.ser.setgetcat().subscribe(cdata=>{
      
      this.catdata=cdata
    })
    this.fun_get_subsubcat()
  }
var_subsubcat_data:object[];   
var_subcat_data:object[];

fun_subcatbased_catid(){
  //alert("hiiiddd")
  this.ser.setsubcat_based_catid({cat_id:parseInt(this.drpcat)}).subscribe((dt)=>{
    
     this.var_subcat_data=dt
  })
}
  ngOnInit() {
  }
 var_get_datanew:object[];
 fun_get_subsubcat(){
  console.log("i am from component1")
   this.loadtmp=true
    this.ser.setgetsubsubcat().subscribe(dt=>{
      console.log("i am from component2")
      this.var_get_datanew=dt
      this.loadtmp=false
      
 })
   }
   
  //object for edit
  
   //image loading
   loadtmp:boolean=false

   //insert..
  txtsubcat:string;
drpcat:string;
drpsubcat:string;

   funinsert(){
     this.loadtmp=true 
     var obj={subsubcatname:this.txtsubcat,
              cat_id:parseInt(this.drpcat),
              subcat_id:parseInt(this.drpsubcat),
              Active:1}
     this.ser.setinsertsubsubcat(obj).subscribe(dt=>{
       alert(dt.result)
       this.txtsubcat="";
      this.drpcat="";
      this.drpsubcat="";
       this.fun_get_subsubcat()
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
