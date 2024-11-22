// login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  data: any;
  constructor(public authService: AuthService) {}

  authenticate() {
    this.authService.login();
  }

  ngOnInit() {
    this.authService
      .getData()
      .then((response) => {
        this.data = response;
      })
      .catch((err) => {
        this.data = err.toString();
      });
  }
}
