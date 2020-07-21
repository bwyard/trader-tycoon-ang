import { Component, OnInit } from '@angular/core';
import { Company } from "../company";
import {CompanyService} from '../company.service'
import { Upgrade } from "./upgrade";
import { UPGRADES } from "./upgradeList";
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  company: Company;
  upgrades = UPGRADES;
  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany():void {
    this.companyService.getCompany().subscribe(company => this.company = this.company);
  }
  getCompanyCash():number{
    let companyCash : Subscription;
    let currentCash: number
    companyCash = this.companyService.getCompanyCash().subscribe(companyCash => {currentCash = companyCash})
    return currentCash;
    
  }
  
  purchase(item:Upgrade){
    let cashAmount = this.getCompanyCash();
    if(item.cost<=cashAmount){
    item.owned = true;
    cashAmount -= item.cost;
    if(item.description === 'upgrade inventory'){
      this.company.inventoryMax +=100;
      item.cost += item.cost;
      item.level += 1;
    }
    if(item.description === 'car'){
      this.company.travelCost = 250;
    }
  }
  else alert(`Cannot Afford ${item.name}`)
  }

  isDisabled(item){
    if (item.cost > this.getCompanyCash()){
      return true;
    }
    if (item.description === 'car'){
      return item.owned
    }
    if (item.description === 'upgrade inventory'){
      return false;
    }
  }

  isOwned(item){
    if (item.owned === true){
      if(item.description === 'car'){
        return 'yes'
      }else{
      return `Yes Level ${item.level}`
    }
    }else{
      return 'no'
    }
  }
}
