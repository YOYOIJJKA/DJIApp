import { Component } from '@angular/core';
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
export class AuthComponent {
  authForm: FormGroup;
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
    if (newUser) {
      this.authService.saveUser(newUser);
      this.router.navigate(['main-page']);
    }
  }

  registrate() {
    const newUser = this.getFormInput();
    if (newUser) {
      this.authService.saveUser(newUser);
      this.router.navigate(['main-page']);
    }
  }
}
