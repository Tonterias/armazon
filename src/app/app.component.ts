import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  userLoggedIn = false;
  title = 'app';

  loggedIn = false;

  constructor(private authService: AuthService, private router: Router) {
    this.loggedIn = this.authService.isAuthenticated();
    console.log('loggedIn en app.component?: ' + this.loggedIn);
  }

  ngOnInit() {
    this.authService.userLoggedIn.subscribe(
      (userLoggedIn: boolean) => {
        if (userLoggedIn === true) {
          this.userLoggedIn = true;
        } else if (userLoggedIn === false) {
          this.userLoggedIn = false;
        }
      }
    );

    // this.authService.userLoggedIn.subscribe(
    //   (userLoggedIn: boolean) => {
    //       this.userLoggedIn = true;
    //   }
    // );





    // this.loggedIn = this.authService.isAuthenticated();
    // console.log('loggedIn ONCHANGES en app.component?: ' + this.loggedIn);
  }

  // ngOnChanges(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  // // return this.authService.isAuthenticated();
  // this.loggedIn = this.authService.isAuthenticated();
  // console.log('loggedIn en app.component?: ' + this.loggedIn);
  // return this.loggedIn;
  // }

  // isloggedIn(route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  // // return this.authService.isAuthenticated();
  // this.loggedIn = this.authService.isAuthenticated();
  // console.log('loggedIn en app.component?: ' + this.loggedIn);
  // return this.loggedIn;
  // }

  // constructor(private authService: AuthService) {
  //   this.loggedIn = this.authService.isAuthenticated();
  //   console.log('App.component logedin?: ' + this.authService.isAuthenticated());
  //  }

}
