import { Observable } from 'rxjs';

export class Payee{

    // payeeName: String = "venkat";
    // payeeId: number=1 ;
    // payeeAccountNumber: string = "12345" ;
    // payeeBankName: String = "SBI";
    // payeeBankIFSC: String ="SBI0001";
    // payeeBankAddress: String = "Hyderabad";
    payeeName: String ;
    payeeId: number;
    payeeAccountNumber: string ;
    payeeBankName: String;
    payeeBankIFSC: String;
    payeeBankAddress: String ;

    constructor(   payeeName: String ,
        payeeId: number,
        payeeAccountNumber: string ,
        payeeBankName: String,
        payeeBankIFSC: String,
        payeeBankAddress: String 
    ){

    }
}