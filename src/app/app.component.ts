import { Component } from '@angular/core';
import { Company } from "./company";

import {CompanyService} from './company.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Trader Tycoon';
  company: Company;
  constructor(    
    private companyService: CompanyService
) { }
  ngOnInit(): void{
    this.getCompany();

  }

  getCompany():void {
    this.companyService.getCompany().subscribe(company => this.company = this.company);

  }
  getCompanyCash():number{
    let companyCashSub : Subscription;
    let currentCash: number
    companyCashSub = this.companyService.getCompanyCash().subscribe(companyCashSub => {currentCash = companyCashSub})
    return currentCash;
    
  }
  getCompanyName():string{
    let companyNameSub : Subscription;
    let companyName: string
    companyNameSub = this.companyService.getCompanyName().subscribe(companyNameSub => {companyName = companyNameSub})
    return companyName;
  }
  getCompanyInventoryTotal(): number{
    let companyInvTotSub : Subscription;
    let inventoryTotal: number
    companyInvTotSub = this.companyService.getCompanyInventoryTotal().subscribe(companyInvTotSub => {inventoryTotal = companyInvTotSub})
    return inventoryTotal;

  }
  getCompanyInventoryMax(): number{
    let companyInvMaxSub : Subscription;
    let inventoryMax: number
    companyInvMaxSub = this.companyService.getCompanyInventoryMax().subscribe(companyInvMaxSub => {inventoryMax = companyInvMaxSub})
    return inventoryMax;

  }
}
