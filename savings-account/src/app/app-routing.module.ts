import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StatementFormComponent} from './statement-form/statement-form.component';
import {AppComponent} from './app.component';

const routes: Routes = [
  {path:'viewStatement/:custId/:accNo', component: StatementFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
