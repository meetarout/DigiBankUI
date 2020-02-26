import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {


  constructor(private router:Router) {
  
    
   }

  ngOnInit() {
  }

  

  openLogin(){
    console.log('open login before');
  this.router.navigate(['login']);  
  //window.location.href='/login';
  console.log('open login after');
  }

}
