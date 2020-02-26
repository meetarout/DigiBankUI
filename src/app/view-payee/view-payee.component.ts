import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';



@Component({
  selector: 'app-view-payee',
  templateUrl: './view-payee.component.html',
  styleUrls: ['./view-payee.component.scss']
})
export class ViewPayeeComponent implements OnInit {
  headElements = ['Sl no.', 'A/I', 'Payee Details', 'Modify', 'Delete'];
  payees: Object;
  cid:string = "1132738";
  i: number = 1;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getPayeeByCid(this.cid).subscribe(data => {
      this.payees = data
      console.log(this.payees);
    }, err => {alert(err)});
  }

  index(){
    return this.i++;
  }

  activateButton(x : string){
    return x !== "Active";
  }

  onClickActivate(pid:number, pname:string){
    if(confirm("Are you sure to Activate the Payee : "+ pname)){
    this._http.activatePayee(pid).subscribe(data =>{
      if(data =="OK")
        alert("Payee "+pname+" Activated! Now you can start transferring funds." )
       }, err => {alert(err)});
       window.location.reload();
    }
  }

  onClickDelete(pid:number, pname:string){
    if(confirm("Are you sure to delete the Payee : "+ pname)){
      this._http.deletePayee(pid).subscribe( data => {
        if(data =="OK")
          alert("Deleted the Payee : "+pname+" with ID : "+pid+" successfully!" )
           }, err => {alert(err)});
          window.location.reload();
    }
    
}

}
