import { Component, OnInit, Input } from '@angular/core';
import {StatementService} from "../statement.service";
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { formatDate } from "@angular/common";
import {MatDatepickerInputEvent} from '@angular/material/datepicker';
import { error } from 'protractor';

@Component({
  selector: 'statement-form',
  templateUrl: './statement-form.component.html',
  styleUrls: ['./statement-form.component.css']
})

export class StatementFormComponent implements OnInit {
  
 myForm: FormGroup;
 custId = 1132738;
 accountNumber = 543210;
 startDate;
 endDate;
 maxDate: Date;
 disableSelect:boolean;
 constructor(private svc:StatementService, private http:HttpClient, private route:ActivatedRoute) {
  this.maxDate = new Date();
 // this.custId = parseInt(this.route.snapshot.paramMap.get('custId'));
  }
tabledata;
errorMessage;
disableDate;
  ngOnInit(): void {
    this.myForm = new FormGroup({
      'startDate': new FormControl(''),
      'endDate': new FormControl(''),
      'monthsDD': new FormControl('')
    });
  }

  onChange(e){
    var edate = new Date();
    var sdate = new Date().setMonth(edate.getMonth() - e);
    if(e==undefined ){
        this.disableDate = false;
        this.myForm.get('endDate').setValue(null);
        this.myForm.get('startDate').setValue(null);
    } else{
        this.myForm.get('endDate').setValue(edate);
        this.myForm.get('startDate').setValue(new Date(sdate));
        this.disableDate = true;     
    }
   /*
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    console.log(formatDate(this.myForm.get('startDate').value, format, locale));
    console.log(formatDate(this.myForm.get('endDate').value, format, locale));
    */
  }

  onSubmit() :void{
    this.errorMessage= null;
    this.tabledata=null;
    const format = 'yyyy-MM-dd';
    const locale = 'en-US';
    let obs = this.http.post('http://localhost:8080/transaction/viewStatement',{
      "customerId":this.custId,
      "startDate": formatDate(this.myForm.get('startDate').value, format, locale),
      "endDate": formatDate(this.myForm.get('endDate').value, format, locale)
  }).subscribe({
    next: (data) => {this.tabledata=data},
    error: err=>{this.errorMessage=err.error.Message;}
     } 
  );
  }


  flagValue: boolean;
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    if(this.myForm.get('startDate').value!=null || this.myForm.get('endDate').value!=null){
         this.flagValue=true;
    }else{
         this.flagValue=false;
    }
   
  }
  
}
