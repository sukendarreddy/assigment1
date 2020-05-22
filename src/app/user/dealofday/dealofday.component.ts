import { Component, OnInit, Inject } from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dealofday',
  templateUrl: './dealofday.component.html',
  styleUrls: ['./dealofday.component.css']
})
export class DealofdayComponent implements OnInit {

  productdataid
  constructor(@Inject(DbservicesService) public ser, @Inject(ActivatedRoute) public ar) { 
    this.ar.params.subscribe(dt=>{
      this.productdataid=dt._id
    })
    this.getdealofday()
  }
ngOnInit() {
  }

  //get dealoftheday
  dealofdaydata
  getdealofday(){
    //alert("hai1")
   // var obj={_id:parseInt(this.productdataid)}
    this.ser.getdealofday().subscribe(dt=>{
      //alert("hai3")
      //alert(dt)
      this.dealofdaydata=dt
      //alert(this.dealofdaydata)

    })
  }

}
