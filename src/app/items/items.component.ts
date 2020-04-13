import { Component, OnInit } from '@angular/core';
import { Item } from "../item";
import { ITEMS } from "../itemList";
import { Company } from "../company";
import { COMPANY } from "../companyCore";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items = ITEMS;
  company = COMPANY;
  constructor() { }

  ngOnInit(): void {
    this.setPrices()
  }

  setPrices():void{
    for (let item of this.items) {
      item.setPrice();
    }
  }
  buyItem(item: Item, quantity:number,index: number):void {
    if(quantity>=0){
    let transactionTotal = quantity * item.price
    if (transactionTotal <= this.company.cash){
      if((this.company.inventoryTotal()+Number(quantity))<(this.company.inventoryMax+1)){
      this.company.cash -= transactionTotal;
      console.log(`inventory total is ${this.company.inventoryTotal()}`);
      console.log(`quantity is ${quantity}`)
      this.company.inventory[index] += Number(quantity);
      //console.log(this.company.inventory);
    }
  }
  }
  }
  sellItem(item: Item, quantity:number,index: number):void {
    if(quantity>=0){
    if (quantity<=this.company.inventory[index]){
      let transactionTotal = quantity * item.price
      this.company.cash += transactionTotal;
      //console.log(this.company.cash);
      this.company.inventory[index] -= quantity;
    //  console.log(this.company.inventory);
    }
    }
  }

}
