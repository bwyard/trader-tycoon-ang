import { Injectable } from '@angular/core';
import { Company } from "./company";
import { COMPANY } from "./companyCore";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompany(): Observable<Company> {
    return of(COMPANY);
  }

  getCompanyCash(): Observable<number>{
    return of(COMPANY.cash);

  }
  getCompanyInventoryById(itemId): Observable<number>{
    return of(COMPANY.inventory[itemId])
  }
  getCompanyInventoryTotal(): Observable<number>{
    return of(COMPANY.inventoryTotal())
  }
  getCompanyName(): Observable<string>{
    return of(COMPANY.name)
  }
  getCompanyInventoryMax(): Observable<number>{
    return of(COMPANY.inventoryMax)
  }
  getCompanyLocation(): Observable<string>{
    return of(COMPANY.currentLocation)
  }
}
