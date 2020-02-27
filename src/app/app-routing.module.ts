import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ViewPayeeComponent } from './view-payee/view-payee.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'payeeList', component: ViewPayeeComponent },
  { path: 'addPayee', component: AddPayeeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
