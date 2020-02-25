import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Payee } from './payee';

@Component({
  selector: 'app-add-payee',
  templateUrl: './add-payee.component.html',
  styleUrls: ['./add-payee.component.scss']
})
export class AddPayeeComponent implements OnInit {

  payee : Payee = {
    customerId: '' ,
    name : '' ,
    nickName: '',
    payeeBankIFSC : '',
    payeeBankAddress : '',
    payeeBankName : '',
    payeeBankCity : '',
    payeeAccountNumber : ''
  }

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
  }

  addPayeeOnClick(){
    this._http.addPayee(this.payee);
  }
}
