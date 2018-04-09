import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  // constructor(private authService: AuthService) { }
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
  }

  onUserLogin() {
    // this.usersService.userActivated.next(this.id);
    this.isLoggedIn = true;
    this.authService.userLoggedIn.next(this.isLoggedIn);
  }

  onUserLogout() {
    // this.usersService.userActivated.next(this.id);
    this.isLoggedIn = false;
    this.authService.userLoggedIn.next(this.isLoggedIn);
  }

  // onLogin() {
  //   this.authService.login();
  //   console.log('Login en header.ts?: ' + this.authService.isAuthenticated());
  //   this.isLoggedIn = this.authService.isAuthenticated();
  //   console.log('Login en header.ts?: ' + this.isLoggedIn);
  // }

  // onLogout() {
  //   this.authService.logout();
  //   console.log('Login en header.ts?: ' + this.authService.isAuthenticated());
  //   this.isLoggedIn = this.authService.isAuthenticated();
  //   console.log('Login en header.ts?: ' + this.isLoggedIn);
  // }

}
