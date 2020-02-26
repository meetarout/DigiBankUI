import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{DemoMaterialModule}from'./material-module';
import { DummyComponent } from './dummy/dummy.component';
import { RechargeNowComponent } from './recharge-now/recharge-now.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { PayMoneyComponent } from './pay-money/pay-money.component';
import { OpenWishComponent } from './open-wish/open-wish.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    RechargeNowComponent,
    SendMoneyComponent,
    PayMoneyComponent,
    OpenWishComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
