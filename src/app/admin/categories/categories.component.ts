import { Component, OnInit, Inject, Input } from '@angular/core';
import { DbservicesService } from '../../dbservices.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
constructor(@Inject(DbservicesService) public ser) {
  this.fun_get_cat()
}


ngOnInit() {
} 
//object for mongo

var_get_data:object[];

//object for fetch
fun_get_cat(){
this.loadtmp=true

 this.ser.setgetcat().subscribe(dt=>{
   this.var_get_data=dt
   this.loadtmp=false
  
})
}

//object for edit

//image loading
loadtmp:boolean=false


category;
Active
funinsert(){
    
  this.loadtmp=true 
  var obj={catname:this.category,Active:this.Active}
  this.ser.setpostcat(obj).subscribe(dt=>{
    //alert("hi")
    this.category=""

    this.fun_get_cat()
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






