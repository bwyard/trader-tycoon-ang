import { Component } from '@angular/core';
import { Company } from "./company";
import { COMPANY } from "./companyCore";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trader Tycoon';
  company = COMPANY;
}
