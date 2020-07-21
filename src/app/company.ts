export class Company{
  name: string;
  cash: number;
  inventoryMax: number;
  travelSpeed: number;
  landTravel: boolean;
  flightTravel: boolean;
  seaTravel: boolean;
  currentLocation: string;
  inventory: number[];
  isLoaded: boolean;
  travelCost: number;
  constructor(name:string,cash:number,inventoryMax:number,travelSpeed:number,landTravel:boolean,flightTravel:boolean,seaTravel:boolean,currentLocation:string,inventory:number[]){
    this.name = name;
    this.cash = cash;
    this.inventoryMax = inventoryMax;
    this.travelSpeed = travelSpeed;
    this.landTravel = landTravel;
    this.flightTravel = flightTravel;
    this.seaTravel = seaTravel;
    this.currentLocation = currentLocation;
    this.inventory = inventory;
    this.isLoaded = false,
    this.travelCost = 1000
  }
  inventoryTotal():number {
    let totalInv:number = 0;
    for (let i of this.inventory){
      totalInv += Number(i);

    }
    return totalInv;
  }
}
