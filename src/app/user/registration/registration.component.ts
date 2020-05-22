import { Component, OnInit, Inject } from '@angular/core';
import { DbservicesService } from 'src/app/dbservices.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
registrationdata;
  constructor(@Inject(DbservicesService) public ser) { 
    
  }

  ngOnInit() {
  }
  firstname;
  lastname;
  Surname;
  DOB;
  email;
  Gender;
  Adrees1;
  userid;
  password;
  cpassword;
  Adrees2;
  mobileno;
  registrat(){
    alert("hai1")
    var obj={
      fname:this.firstname,
      lname:this.lastname,
      Surname:this.Surname,
      userid:this.userid,
      password:this.password,
      cpassword:this.cpassword,
      DOB:this.DOB,
      gender:this.Gender,
      mobileno:this.mobileno,
      email:this.email,
      Adrees1:this.Adrees1,
      Adrees2:this.Adrees2


    }
    this.ser.registration(obj).subscribe(dt=>{
      alert("Registration Successfully")
      this.registrationdata=dt;
    })
      
    
  }

}
