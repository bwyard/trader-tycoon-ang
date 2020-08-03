export class Item {
  id: number;
  name: string;
  floorVal: number;
  cielVal: number;
  avgVal: number;
  price: number;
  weight: number;
  tax: number;
  quantity: number
  constructor(id:number,name: string,floorVal: number,cielVal:number,avgVal:number,weight:number,tax:number) {
    this.id = id,
    this.name = name,
    this.floorVal = floorVal,
    this.cielVal = cielVal,
    this.avgVal = avgVal,
    this.weight = weight,
    this.tax = tax,
    this.price = 0,
    this.quantity = 100
  }
  setPrice(){
    let values = [Math.round(((Math.random()*this.cielVal)+this.floorVal)),Math.round((this.avgVal-Math.random()*(this.avgVal*.3))),Math.round((this.avgVal+Math.random()*(this.avgVal*.3))),Math.round((this.avgVal+Math.random()*(this.avgVal*.10))),Math.round((this.avgVal-Math.random()*(this.avgVal*.10)))];
       let price = values[Math.floor(Math.random()*values.length)];
       //console.log(values);
       this.price = price;
       while(this.price<this.floorVal || this.price>this.cielVal){
         this.setPrice();
       }
       return price
     }
}
