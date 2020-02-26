import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';


import { Observable, of, Subject, BehaviorSubject, throwError } from 'rxjs';

import { catchError, tap } from 'rxjs/operators';

import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // private customer: Customer;
  private baseUrl = 'http://10.188.208.211:6060/customer-service/api/';

constructor(private http: HttpClient) { }

saveCustomer(customer: Customer): Observable<Customer> {
  console.log('inside save before call' + customer);

  const url = this.baseUrl + '/save-customer-details';
  return this.http.post<Customer>(url, customer);
}



}



