import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundTransforComponent } from './fund-transfor/fund-transfor.component';
import { TransactionComponent } from './transaction/transaction.component';


const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'fundTransfor', component: FundTransforComponent },
  { path: 'transaction', component: TransactionComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
