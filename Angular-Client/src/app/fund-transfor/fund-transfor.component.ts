import { Component, OnInit } from '@angular/core';
import { Transaction } from '../Transaction';
import { TransactionService } from '../transaction.service';
import { observable, Observable } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fund-transfor',
  templateUrl: './fund-transfor.component.html',
  styleUrls: ['./fund-transfor.component.css']
})
export class FundTransforComponent implements OnInit {
  
  transfor: Transaction= new Transaction();
  tranaforRes: Transaction;
  submitted = false;
  constructor(private transactionService: TransactionService, private rout:Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    this.save(); 
  }
 // response: Observable <Transaction>;  
  save() {
   let tranaforRes =  this.transactionService.fundTransfor(this.transfor).
   subscribe(transfor => 
        console.log(transfor),
        error => console.log(error));
        this.rout.navigate(['fundTransfor']);
console.log(tranaforRes);
  }
}
 