import { Subject } from 'rxjs/Subject';

export class AuthService {
  loggedIn = false;

  userLoggedIn = new Subject();

  // isAuthenticated() {
  //   const promise = new Promise(
  //     (resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(this.loggedIn);
  //       }, 800);
  //     }
  //   );
  //   return promise;
  // }

  isAuthenticated() {
    if (this.loggedIn === true) {
      this.loggedIn = true;
      console.log('loggedIn en auth service?: ' + this.loggedIn);
      return this.loggedIn;
    } else {
      this.loggedIn = false;
      console.log('loggedIn en auth service?: ' + this.loggedIn);
      return this.loggedIn;
    }
  }

  login() {
    this.loggedIn = true;
    console.log('ejecuto loggedIn en auth service: ' + this.loggedIn);
  }

  logout() {
    this.loggedIn = false;
    console.log('ejecuto logout en auth service: ' + this.loggedIn);
  }
}
