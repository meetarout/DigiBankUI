import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'statement-summary',
  templateUrl: './statement-summary.component.html',
  styleUrls: ['./statement-summary.component.css']
})

export class StatementSummaryComponent implements OnInit {
  tabledata;
  custId = 1132738;
 accountNumber = 543210;
  constructor(private http:HttpClient) {
    let obs = this.http.post('http://localhost:8080/transaction/viewStatement/2692146',{
      "customerId":this.custId,
      "startDate": "2019-09-29",
      "endDate": "2020-03-29"
  }).subscribe((response) =>{this.tabledata=response;});
   }
  ngOnInit(): void {

  }

}
