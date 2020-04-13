import { Component } from '@angular/core';
import { company } from "./company";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trader Tycoon';
  company = company;
}
