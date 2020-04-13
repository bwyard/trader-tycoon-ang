import { Component, OnInit } from '@angular/core';
import { Company } from "../company";
import { COMPANY } from "../companyCore";
import { Upgrade } from "./upgrade";
import { UPGRADES } from "./upgradeList";

@Component({
  selector: 'app-upgrades',
  templateUrl: './upgrades.component.html',
  styleUrls: ['./upgrades.component.css']
})
export class UpgradesComponent implements OnInit {
  company = COMPANY;
  upgrades = UPGRADES;
  constructor() { }

  ngOnInit(): void {
  }
  purchase(item:Upgrade){
    if(item.cost<=this.company.cash){
    item.owned = true;
    this.company.cash -= item.cost;
  }
  else alert(`Cannot Afford ${item.name}`)
  }
}
