import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { NavComponent } from './nav/nav.component';
import { UpgradesComponent } from './upgrades/upgrades.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    NavComponent,
    UpgradesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
