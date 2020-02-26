import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Transaction } from './Transaction';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class TransactionService  {

  private baseUrl = 'http://localhost:8080/transaction/';

  constructor(private http: HttpClient) { }

  fundTransfor(transfor) {
    return this.http.post<Transaction>(this.baseUrl, transfor);
   // .pipe(data=> data, catchError(this.handleError)
  }

 
}
