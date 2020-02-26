import { Component, OnInit, ErrorHandler } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';
import { Transaction } from '../Transaction';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Payee } from '../payee';
import { customer } from '../customer';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  
  myForm: FormGroup;
  transfor: Transaction= new Transaction();
  tranaforRes: Transaction;
 customerArray: customer[];
  submitted = false;

  customeArray:Array<customer> = [
    {customerAccountNumber: "98456",customerId: 5454, customerName: "Ram",customerBranch: "SBI",
    customerBank: "SBI",    customerIFSC: "SBI12345t",    customerBankAddress: "HYD"},
    {customerAccountNumber: "98766",customerId: 5455, customerName: "Ram",customerBranch: "SBI",
    customerBank: "SBI",    customerIFSC: "SBI12345t",    customerBankAddress: "HYD"},
    {customerAccountNumber: "98767",customerId: 5456, customerName: "Ram",customerBranch: "SBI",
    customerBank: "SBI",    customerIFSC: "SBI12345t",    customerBankAddress: "HYD"}
  ];
   payeeArray:Array<Payee> = [
    {payeeName: "venkat",    payeeId: 1 ,    payeeAccountNumber:  "12345" ,    payeeBankName:  "SBI",
    payeeBankIFSC: "SBI0001",    payeeBankAddress:  "Hyderabad"},
    {payeeName: "venkat123",    payeeId: 2 ,    payeeAccountNumber:  "12345" ,    payeeBankName:  "SBI",
    payeeBankIFSC: "SBI0001",    payeeBankAddress:  "Hyderabad"},
    {payeeName: "venkat678",    payeeId: 3 ,    payeeAccountNumber:  "12345" ,    payeeBankName:  "SBI",
    payeeBankIFSC: "SBI0001",    payeeBankAddress:  "Hyderabad"}
  ];
  response: Transaction;
  customerData = this.customeArray[0];
  payeeData = this.payeeArray[0];
  error;
    constructor(private transactionService: TransactionService,
     private rout:Router,private httpClient: HttpClient, private fb:FormBuilder) { 

     }

  ngOnInit() {


    this.myForm=this.fb.group({
      'customerID': ['',Validators.required],
      'payeeName':  ['',Validators.required],
      'transactionAmout':  ['',Validators.required],
      'Remarks': ['',Validators.required]

    })
    
 }

   
  onSubmit() {
    this.submitted = true;
    
  }

  // getcustomer(){
  //    return this.httpClient.get(this.customer).subscribe(data => 
  //     {console.log(data);
  //           this.customer= data;});
  // }
 /*  getPayee(){
    return this.httpClient.get("src/assets/payee.json").subscribe(data => 
      {console.log(data);
            this.payee= data;});        

  } */
 // response: Observable <Transaction>;  
  formData;
  transaction() {
    this.submitted = true;
   this.error= null;
   
   this.transfor= this.transactionData();
    console.log(this.transfor);
     this.transactionService.fundTransfor(this.transfor)
    .subscribe(transfor1 => {
         //this.tranaforRes=transfor,
         this.transfor= transfor1,
         console.log(this.transfor.customerAccountNumber);
         this.transfor.payeeAccountNumber="123456";
         console.log("--------------------"+this.transfor.payeeAccountNumber);
        },
         err=>this.error=err.error.Message,);
         this.rout.navigate(['transaction']);
 
}
transactionData(){

  console.log("======4====="+(this.myForm.get('payeeName').value).payeeName)
   this.payeeArray.forEach(element => {
     if((this.myForm.get('payeeName').value).payeeName == element.payeeName){
      this.transfor.payeeId = element.payeeId;
      console.log("pp: "+this.transfor.payeeId+"========="+element.payeeId);
      return;
     }
  });
  console.log(this.transfor.payeeId);
  this.customeArray.forEach(element => {
 
    if((this.myForm.get('customerID').value).customerAccountNumber == element.customerAccountNumber){
      this.transfor.customerId= element.customerId ;
      console.log("88: "+this.transfor.customerId+"========="+element.customerId);
      this.transfor.customerAccountNumber =  element.customerAccountNumber;  
      return;  
    }
  });
  console.log("========================"+this.transfor.customerAccountNumber)
  this.transfor.transactionType="debit";
  console.log(this.transfor);
  return this.transfor;

}
get diagnostic() { return JSON.stringify(this.transfor); }
  // Error handling 
handleError(error: HttpErrorResponse) {
  if (error.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    console.error('An error occurred:', error.error.message);
  } else {
    console.error(
      `Backend returned code ${error.status}, ` +
      `body was: ${error.error}`);
  }
  // return an observable with a user-facing error message
  return throwError(
    'Something bad happened; please try again later.');
}
}
 
