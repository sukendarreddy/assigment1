import { Injectable, Inject } from '@angular/core';
import{BehaviorSubject} from "rxjs"
@Injectable({
  providedIn: 'root'
})
export class ProductincService {
  bs=new BehaviorSubject("0")
  current_value

  constructor() {
    this.current_value=this.bs.asObservable()
   }
   funnext(nv){
     nv++
     this.bs.next(nv)
   }
}
