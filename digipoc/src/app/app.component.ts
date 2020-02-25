import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { User } from './_models/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'tek-bank';

 


  currentUser: User;

  constructor(
  private router: Router,
  private authenticationService: AuthenticationService
  ) {
  this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  
  logout() {
  this.authenticationService.logout();
  this.router.navigate(['/login']);
  } 

  




}



