import { Injectable } from '@angular/core';
import { User } from '../Interfaces/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserProgress } from '../Interfaces/user-progress';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL + 'users');
  }

  postUser(user: User) {
    return this.httpClient.post<User>(this.URL + 'users', user);
  }

  patchUserProgress(
    userProgress: UserProgress,
    userId: number
  ): Observable<UserProgress> {
    return this.httpClient.patch<UserProgress>(
      this.URL + 'userProgress/' + userId,
      userProgress
    );
  }

  postUserProgress(userProgress: UserProgress): Observable<UserProgress> {
    return this.httpClient.post<UserProgress>(
      this.URL + 'userProgress',
      userProgress
    );
  }

  getUserProgress(userId: number): Observable<UserProgress> {
    return this.httpClient.get<UserProgress>(
      this.URL + 'userProgress/' + userId
    );
  }

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

  saveId(id: number) {
    localStorage.setItem('id', JSON.stringify(id));
  }
  getId() {
    return JSON.parse(localStorage.getItem('id')!);
  }

  setAuth(): void {
    localStorage.setItem('authorized', JSON.stringify(true));
  }
  checkAuth(): boolean {
    if (localStorage.getItem('authorized')) return true;
    else return false;
  }
  saveUser(user: User): void {
    this.saveId(user.id!);
    this.saveLogin(user.email);
    this.savePassword(user.password);
  }
  clearStorage(): void {
    localStorage.removeItem('login');
    localStorage.removeItem('password');
    localStorage.removeItem('authorized');
    localStorage.removeItem('id');
  }
}
