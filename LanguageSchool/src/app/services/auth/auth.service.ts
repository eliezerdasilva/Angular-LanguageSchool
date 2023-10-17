import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated = localStorage.getItem("isLogged") ? true : false;

  login() {
    localStorage.setItem("isLogged", "true")
    // this.isAuthenticated = true;
  }

  logout() {
    localStorage.removeItem("isLogged")
    // this.isAuthenticated = false;
  }

  isAuthenticatedUser() {
    return this.isAuthenticated;
  }
}
