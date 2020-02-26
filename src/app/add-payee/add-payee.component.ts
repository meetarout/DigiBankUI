import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Payee } from './payee';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.scss']
})
export class AddPayeeComponent implements OnInit {

  payeeForm : FormGroup;

  constructor(private _http: HttpService , private fb:FormBuilder) { }

  ngOnInit(): void {
    this.payeeForm = this.fb.group({
      customerId : ['1132738',Validators.required],
      name : ['',Validators.required],
      nickName: ['',Validators.required],
      payeeBankIFSC : ['',Validators.required],
      payeeBankAddress : ['',Validators.required],
      payeeBankName : ['',Validators.required],
      payeeBankCity : ['',Validators.required],
      payeeAccountNumber : ['',Validators.required]
     });
  }

  addPayeeOnClick(){
    this._http.addPayee(this.payeeForm.value);
  }
}
