export let company:{
  name: string,
  cash: number,
  inventoryMax: number,
  travelSpeed: number,
  landTravel: boolean,
  flightTravel: boolean,
  seaTravel: boolean,
  currentLocation: object,
  inventory: number[],
  inventoryTotal():number ():{}
} = {
  name: 'Brent',
  cash: 50000,
  inventoryMax:50,
  travelSpeed:1,
  landTravel:true,
  flightTravel:false,
  seaTravel:true,
  currentLocation: null,
  inventory: [0,0,0,0],
  inventoryTotal():number {
    let totalInv:number = 0;
    for (let i of this.inventory){
      totalInv =+ i;

    }
    return totalInv;
  }
};
