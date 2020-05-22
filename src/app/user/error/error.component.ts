import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor(@Inject(Router) public rt) { }
  homefun(){
    this.rt.navigateByUrl("user")
  }

  ngOnInit() {
  }

}
