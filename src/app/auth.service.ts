// auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user = { name: 'nidhal' };
  isLogged = false;

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

  getData() {
    return new Promise((resolve, reject) => {
      let nb = Math.trunc(Math.random() * 20) + 1;
      console.log(nb);

      setTimeout(() => {
        if (nb < 10) resolve(`Data valide`);
        else reject(new Error('Nombre superieur à 10'));
      }, 2000);
    });
  }
}
