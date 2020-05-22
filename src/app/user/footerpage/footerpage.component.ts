import { Component, OnInit,Inject } from '@angular/core';

import { DbservicesService } from 'src/app/dbservices.service';
declare var $ :any
@Component({
  selector: 'app-footerpage',
  templateUrl: './footerpage.component.html',
  styleUrls: ['./footerpage.component.css']
})
export class FooterpageComponent implements OnInit {
  email;text
  constructor(@Inject(DbservicesService)public ser){ 
    

  }

//STAY CONNECTED
stayconnected(){
  //alert("hai")
var obj={email:this.email,text:this.text}
  this.ser.setstayconnected(obj).subscribe(dt=>{

  })
}




  ngOnInit() {
  }
log(){
  if(localStorage.getItem("aut"))
  $("#login").modal("hide")   
  else
  $("#login").modal("show")  
}
}
