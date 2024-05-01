import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  savePassword(value: string): void {
    localStorage.setItem('password', JSON.stringify(value));
  }
  getPassword(): string {
    return JSON.parse(localStorage.getItem('password')!);
  }
  saveLogin(value: string): void {
    localStorage.setItem('login', JSON.stringify(value));
  }
  getLogin(): string {
    return JSON.parse(localStorage.getItem('login')!);
  }
  setAuth(): void {
    localStorage.setItem('authorized', JSON.stringify(true));
  }
  checkAuth(): boolean {
    if (localStorage.getItem('authorized')) return true;
    else return false;
  }
  saveUser(user: User): void {
    this.saveLogin(user.email);
    this.savePassword(user.password);
  }
  clearStorage(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('authorized');
    localStorage.removeItem('flag');
    localStorage.removeItem('post');
  }
}
