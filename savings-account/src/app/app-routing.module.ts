import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementFormComponent} from './statement-form/statement-form.component';
import {StatementSummaryComponent} from './statement-summary/statement-summary.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'viewStatement', component: StatementFormComponent},
  {path:'statementSummary', component:StatementSummaryComponent },
  {path:'', redirectTo:'viewStatement', pathMatch: 'full'},

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
