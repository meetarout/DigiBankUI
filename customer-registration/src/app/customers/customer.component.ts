import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

import { debounceTime } from 'rxjs/operators';

import { Customer } from './customer';
import { CustomerService } from './customer.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";
  customerForm: FormGroup;
  private newCustomer: Customer = new Customer();
  emailMessage: string;
  errorMessage: string;

  get addresses(): FormArray {
    return this.customerForm.get('address') as FormArray;
  }

  get emails(): FormArray {
    return this.customerForm.get('email') as FormArray;
  }
  get phoneNumbers(): FormArray {
    return this.customerForm.get('phoneNumber') as FormArray;
  }

  private validationMessages = {
    required: 'Please enter your email address.',
    email: 'Please enter a valid email address.'
  };

  constructor(private fb: FormBuilder,  private customerService: CustomerService) { }

  ngOnInit() {
    this.customerForm = this.fb.group({
      customerStatus: '',
customerId: '',
      customerName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      middleName: ['', [Validators.required, Validators.maxLength(50)]],
      address: this.fb.array([this.buildAddress()]),
      email: this.fb.array([this.buildEmails()]),
      phoneNumber : this.fb.array([this.buildPhoneNumbers()])
    });



  }

  addAddress(): void {
    this.addresses.push(this.buildAddress());
  }

  addEmails(): void {
    this.emails.push(this.buildEmails());
  }

  addPhoneNumbers(): void {
    this.phoneNumbers.push(this.buildPhoneNumbers());
  }

  buildAddress(): FormGroup {
    return this.fb.group({
      addressId: 0,
      addressType: 'home',
      isPrimary: false,
      doorNumber: ['', Validators.required],
      street: ['', Validators.required],
      landMark: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      pinCode: ['', Validators.required]
    });
  }

  buildEmails(): FormGroup {
    return this.fb.group({
      emailId: 0,
      emailType: 'home',
      isPrimaryEmail: false,
     emailAddress: ['', Validators.required]
    });
  }

  buildPhoneNumbers(): FormGroup {
    return this.fb.group({
      phoneNumberId: '0',
      phoneNumberType: 'home',
      isPrimaryNumber: false,
     number: ['', Validators.required],
     countryCode: '',
     cityCode: ''
    });
  }

  populateTestData(): void {
    this.customerForm.patchValue({
      customerName: 'Jack',
      lastName: 'Harkness',
      emailGroup: { email: 'jack@torchwood.com', confirmEmail: 'jack@torchwood.com' }
    });
    const addressGroup = this.fb.group({
      addressId: '0',
      addressType: 'work',
      doorNumber: '10-101',
      landMark: 'Near Main Road',
      street: 'Mermaid Quay',
      city: 'Cardiff Bay',
      state: 'CA',
      country: 'United states',
      pinCode: '39728'
    });
    this.customerForm.setControl('address', this.fb.array([addressGroup]));

    const emailGroup1 = this.fb.group({
      emailId: '0',
      emailType: '',
      isPrimaryEmail: '',
      emailAddress: ''
    });

    this.customerForm.setControl('email', this.fb.array([emailGroup1]));


    const phoneNumberGroup = this.fb.group({
      phoneNumberId: '0',
      phoneNumberType: '',
      isPrimaryNumber: '',
      number: '',
      countryCode: '',
      cityCode: ''
    });

    this.customerForm.setControl('phoneNumbers', this.fb.array([phoneNumberGroup]));
  }


  get f(): any {
   // return this.customerForm.controls;
    return (this.customerForm.get('address') as FormArray).controls;
}

get p(): any {
  // return this.customerForm.controls;
   return (this.customerForm.get('phoneNumber') as FormArray).controls;
}



  save() {
    this.errorMessage = null;
   // this.newCustomer = <Customer> this.customerForm.value;
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
    console.log('Saved: ' + JSON.stringify(this.newCustomer));
    this.newCustomer = new Customer(this.customerForm.value);
    console.log('Saved customer: ' + JSON.stringify(this.newCustomer));
    this.customerService.saveCustomer(this.newCustomer).subscribe({
      next: (data) => {this.newCustomer = data ; },
      error: err => { this.errorMessage = err.error.errorMessage;
        console.log(this.errorMessage); }
      });




  }

}
