import { Injectable } from '@angular/core';
import {CanActivate} from "@angular/router"

@Injectable({
  providedIn: 'root'
})
export class RouterguardService implements CanActivate{
  canActivate(){
    if(localStorage.getItem("aut")){
      return true;
    } else{
      window.location.href="http://localhost:4200/user/err"
    }
    

  }

  constructor() { }
}

