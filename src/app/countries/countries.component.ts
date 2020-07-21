import { Component, OnInit } from '@angular/core';
import { EventEmitterService } from "../event-emitter.service";
import { Country } from "./country";
import { COUNTRIES } from "./countryList";
import {CompanyService} from '../company.service'
import { Company } from '../company';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  company: Company;

  countries = COUNTRIES;
  buttonDisabled: boolean = false;
  constructor(
    private eventEmitterService: EventEmitterService,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.getCompany();
  }

  getCompany():void {
    this.companyService.getCompany().subscribe(company => this.company = this.company);

  }
  getCompanyLocation(): string {
      let companyNameSub : Subscription;
      let companyLocation: string;
      companyNameSub = this.companyService.getCompanyLocation().subscribe(companyLocSub => {companyLocation = companyLocSub})
      return companyLocation;

  }
  itemsTravelFunction(country){
    this.company.currentLocation = country.abbreviation;
    this.eventEmitterService.onTravelButtonClick();
  }

  isDisabled(country: Country){
    let location = this.getCompanyLocation();


if(location === null){
  location = "USA";
}
    if(location === country.abbreviation)
    {
      this.buttonDisabled = true;
      console.log(`currentLocation is ${location} and country is ${country.abbreviation}`)
    }else{
      this.buttonDisabled = false;
    }
  return this.buttonDisabled;
  }





}
