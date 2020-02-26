import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{DummyComponent}from './dummy/dummy.component';
import{RechargeNowComponent}from './recharge-now/recharge-now.component';
import{SendMoneyComponent}from './send-money/send-money.component';
import{PayMoneyComponent}from './pay-money/pay-money.component';
import{OpenWishComponent}from './open-wish/open-wish.component';

const routes: Routes = [
{path:'ViewStatements', component: DummyComponent},
{path:'RechargeNow', component:RechargeNowComponent },
{path:'SendMoney',component: SendMoneyComponent},
{path:'PayBills',component: PayMoneyComponent},
{path:'OpenWish',component: OpenWishComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
