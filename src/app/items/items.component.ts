import { Component, OnInit } from '@angular/core';
import { Item } from "./item";
import { ITEMS } from "./itemList";
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
    this.setQuantities()
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
    quantity = Math.round(quantity);
    if (quantity >= 0) {
      if (quantity<item.quantity) {
        let transactionTotal = quantity * item.price
        if (transactionTotal <= this.company.cash) {
          if ((this.company.inventoryTotal() + Number(quantity)) < (this.company.inventoryMax + 1)) {
            this.company.cash -= transactionTotal;
            console.log(`inventory total is ${this.company.inventoryTotal()}`);
            console.log(`quantity is ${quantity}`)
            this.company.inventory[index] += Number(quantity);
            //console.log(this.company.inventory);
            item.quantity -= quantity;
          } else alert("Not enough room to purchase inventory")
        } else alert("Not enough cash to complete transaction")
      } else alert(`This location does not have ${quantity} ${item.name} available to purchase`)
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
    if (this.company.cash >= 1000) {
      this.setPrices();
      this.setQuantities();
      this.company.cash -= 1000
    } else alert("Not enough Money to travel")
  }
}
