import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../Services/auth.service';
import { User } from '../../Interfaces/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  users?: User[];
  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    public snackBar: MatSnackBar,
    public authService: AuthService
  ) {
    this.authForm = formBuilder.group({
      login: [
        null,
        [
          Validators.required,
          Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
        ],
      ],
      password: [null, [Validators.required, Validators.pattern(/^\S*$/)]],
    });
  }

  ngOnInit(): void {
    this.authService.getUsers().subscribe({
      next: (users) => {
        this.users = users;
      },
    });
  }

  getFormInput(): User | undefined {
    if (this.authForm.valid) {
      return {
        email: this.authForm.getRawValue().login,
        password: this.authForm.getRawValue().password,
      };
    } else {
      return undefined;
    }
  }

  logIn() {
    const newUser = this.getFormInput();
    if (!this.users) {
      console.error('Пользователи не получены.');
      return;
    }
    if (newUser && this.findUser(newUser)) {
      this.authService.saveUser(this.findUser(newUser)!);
      this.router.navigate(['main-page']);
    } else {
      this.snackBar.open(
        'Проверьте правильность введенных данных, аутентификация не пройдена.',
        'Ок'
      );
    }
  }

  findUser(newUser: User) {
    return this.users?.find((user) => {
      return user.email == newUser.email && user.password == newUser.password;
    });
  }

  registrate() {
    const newUser = this.getFormInput();
    let newId: number;
    if (
      this.users &&
      this.users[this.users.length - 1] &&
      this.users[this.users.length - 1].id
    ) {
      newId = Number(this.users[this.users.length - 1].id!) + 1;
    } else {
      newId = 0;
    }
    if (newUser) {
      newUser.id = newId;
      this.authService.postUser(newUser).subscribe();
      this.authService
        .postUserProgress({
          id: newUser.id,
          currentPage: null,
          currentAnimationName: null,
          correctAnswers: null,
        })
        .subscribe();
      this.authService.saveUser(newUser);
      this.router.navigate(['main-page']);
    }
  }
}
