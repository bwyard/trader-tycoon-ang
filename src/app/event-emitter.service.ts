import { Injectable, EventEmitter } from '@angular/core';
import { Subscription } from "rxjs/internal/Subscription";

@Injectable({
  providedIn: 'root'
})
export class EventEmitterService {

  invokeTravelFunction = new EventEmitter();
  subsVar: Subscription;


  constructor() { }

  onTravelButtonClick(){
    this.invokeTravelFunction.emit();
  }
}
