import { Component, OnInit,Inject } from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
varcat:Object[];varsubcat:Object[];varsubsubcat:Object[]
  constructor(@Inject(DbservicesService) public ser) { 
   
    this.ser.setgetcat().subscribe(dt=>{
      this.varcat=dt;
      //alert(this.varcat)
      
    })
    this.ser.setgetsubcat().subscribe(dt=>{
      this.varsubcat=dt;
    })
    this.ser.setgetsubsubcat().subscribe(dt=>{
      this.varsubsubcat=dt;
    })
  }

  ngOnInit() {
  }

}
