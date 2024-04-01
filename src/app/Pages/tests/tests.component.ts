import { Component } from '@angular/core';
import { TESTS } from '../../config/tests';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent {
  tests = TESTS;
  answers: string[] = [];

  constructor(public snackBar: MatSnackBar) {
    for (let i = 0; i < this.tests.length; i++) {
      this.tests[i].index = i;
    }
  }

  checkAnswers(): void {
    if (this.answers.length == this.tests.length) {
      let counter = 0;
      for (let i = 0; i < this.tests.length; i++) {
        if (this.tests[i].correct == this.answers[i]) counter++;
      }
      console.log(counter);
    } else this.openSnackBar();
  }

  openSnackBar(): void {
    this.snackBar.open('Пожалуйста, ответьте на все вопросы в тесте.', 'ОК');
  }

  clearAnswers(): void {
    this.answers = this.answers.map((answer) => (answer = ''));
  }
}
