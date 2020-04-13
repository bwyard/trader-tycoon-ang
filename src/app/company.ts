export class Company{
  name: string;
  cash: number;
  inventoryMax: number;
  travelSpeed: number;
  landTravel: boolean;
  flightTravel: boolean;
  seaTravel: boolean;
  currentLocation: object;
  inventory: number[];
  constructor(name:string,cash:number,inventoryMax:number,travelSpeed:number,landTravel:boolean,flightTravel:boolean,seaTravel:boolean,currentLocation:object,inventory:number[]){
    this.name = name;
    this.cash = cash;
    this.inventoryMax = inventoryMax;
    this.travelSpeed = travelSpeed;
    this.landTravel = landTravel;
    this.flightTravel = flightTravel;
    this.seaTravel = seaTravel;
    this.currentLocation = currentLocation;
    this.inventory = inventory;
  }
  inventoryTotal():number {
    let totalInv:number = 0;
    for (let i of this.inventory){
      totalInv += Number(i);
      console.log(`inventory total being counter:${i}`);

    }
    return totalInv;
  }
}
