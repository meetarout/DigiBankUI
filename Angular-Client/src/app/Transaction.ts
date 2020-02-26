import { Observable } from 'rxjs';

import { Payee } from './payee';
import { customer } from './customer';

export class Transaction{

    transactionId: number ;
    transactionType: string ;
    availableBalance: DoubleRange ;
    transactionAmount: DoubleRange ;
    customerAccountNumber: string ;
    customerId: number ;
    customerName: string ;
    customerBranch: string ;
    customerBank: string ;
    customerIFSC: string ;
    customerBankAddress: string ;
    payeeName: string ;
    payeeId: number ;
    payeeAccountNumber: string ;
    payeeBankName: string ;
    payeeBankIFSC: string ;
    payeeBankAddress: string ;
    transactionTime: Date ;
    remarks: string;
    customer: customer;
    payee:Payee;
}