import { Component, OnInit } from '@angular/core';
import { LoginModel } from './models/login.model';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  title = 'CodeSandbox';

  ngOnInit(): void {
    const loginInfo: LoginModel = {
      isLoggedIn: true,
      email: 'test@test.com',
      password: '1234',
    };
    localStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }
}
