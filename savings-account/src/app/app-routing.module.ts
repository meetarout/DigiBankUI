import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementFormComponent} from './statement-form/statement-form.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'viewStatement/:custId/:accNo', component: StatementFormComponent},
  {path:'', redirectTo:'viewStatement', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
