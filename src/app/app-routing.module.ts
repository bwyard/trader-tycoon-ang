import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemsComponent } from './items/items.component'
import { CountriesComponent } from "./countries/countries.component";
import { UpgradesComponent } from "./upgrades/upgrades.component";


const routes: Routes = [
  { path: 'items', component: ItemsComponent},
  { path: 'upgrades', component: UpgradesComponent},
  { path: 'countries', component: CountriesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
