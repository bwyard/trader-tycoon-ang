import { Upgrade } from "./upgrade";
import { Company } from "../company";
import { COMPANY } from "../companyCore";

let company = COMPANY;
export const UPGRADES: Upgrade[] = [
  {name:"inventory upgrade", cost:75000, description:'upgrade inventory',owned:false, activateUpgrade(){company.inventoryMax = 150}},
  {name:"car upgrade",cost: 150000, description:'car',owned:false}
]
