import { Component, OnInit } from '@angular/core';
import { Item } from "./item";
import { ITEMS } from "./itemList";
import {CompanyService} from '../company.service'
import { EventEmitterService } from "../event-emitter.service";
import { Country } from "../countries/country";
import { COUNTRIES} from "../countries/countryList";
import { Company } from '../company';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  company: Company;
  isLoaded = false;
  countries:Country[] = COUNTRIES;
  constructor(    private eventEmitterService: EventEmitterService,
    private companyService: CompanyService
) { }

  ngOnInit(): void {
    this.getCompany();
    if (this.eventEmitterService.subsVar==undefined) {
    this.eventEmitterService.subsVar = this.eventEmitterService.
    invokeTravelFunction.subscribe((name:string) => {
      this.travel();
    });
    this.loadPage();
  }

  
  

  }

  loadPage(){
    if( !this.isLoaded){
      this.setPrices();
      this.setQuantities();
      this.isLoaded=true;
      
  
    }
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
  getCompanyInventoryById(itemId){
    let companyInvSub : Subscription;
    let inventoryById: number
    companyInvSub = this.companyService.getCompanyInventoryById(itemId).subscribe(companyInvSub => {inventoryById = companyInvSub})
    return inventoryById;
    

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
  getCompanyInvById(itemId): number{
    let companyInventorySub: Subscription;
    let inventoryAmount: number
    companyInventorySub = this.companyService.getCompanyInventoryById(itemId).subscribe(companyInventorySub => {inventoryAmount = companyInventorySub})
    return inventoryAmount;

  }
  setPrices(): void {
    for (let item of this.items) {
      item.setPrice();
    }
  }
  setQuantities():void{
    for (let item of this.items){
      item.quantity = Math.round(Math.random()*100)
    }
  }
  buyItem(item: Item, quantity: number, index: number): void {
    let cashAmount = this.getCompanyCash();
    quantity = Math.round(quantity);
    if (quantity >= 0) {
      if (quantity<=item.quantity) {
        let transactionTotal = quantity * item.price
        if (transactionTotal <= cashAmount) {
          if ((this.getCompanyInventoryTotal() + Number(quantity)) < (this.getCompanyInventoryMax() + 1)) {
            cashAmount -= transactionTotal;
            console.log(`inventory total is ${this.getCompanyInventoryTotal()}`);
            console.log(`quantity is ${quantity}`)
            //this.company.inventory[index] += Number(quantity);
            //console.log(this.company.inventory);
            item.quantity -= quantity;
          } else alert("Not enough room to purchase inventory")
        } else alert(`Not enough cash to complete transaction. Current transaction would cost ${transactionTotal}`)
      } else alert(`This location does not have ${quantity} ${item.name} available to purchase. item quantity is ${item.quantity}`)
    }
  }
  sellItem(item: Item, quantity: number, index: number): void {
    quantity = Math.round(quantity);
    if (quantity >= 0) {
      if (quantity <= this.company.inventory[index]) {
        let transactionTotal = quantity * item.price
        this.company.cash += transactionTotal;
        //console.log(this.company.cash);
        this.company.inventory[index] -= quantity;
        //  console.log(this.company.inventory);
      } else alert("Can not sell you what you do not own")
    } else alert("Can not sell 0 items")

  }
  travel() {
    if (this.company.cash >= this.company.travelCost) {
      this.setPrices();
      this.setQuantities();
      this.company.cash -= this.company.travelCost;


    } else alert("Not enough Money to travel")
  }
}
