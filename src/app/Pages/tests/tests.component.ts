import { Component, OnInit } from '@angular/core';
import { TESTS } from '../../config/tests';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss',
})
export class TestsComponent implements OnInit {
  tests = TESTS;
  answers: string[] = [];
  prevCorrectAnswersNumber?: number | null = 10;

  constructor(private snackBar: MatSnackBar, private auth: AuthService) {
    for (let i = 0; i < this.tests.length; i++) {
      this.tests[i].index = i;
    }
  }

  ngOnInit(): void {
    this.auth.getUserProgress(this.auth.getId()).subscribe({
      next: (value) => {
        this.prevCorrectAnswersNumber = value.correctAnswers;
      },
    });
  }
  /**
   * Преобразует строку - приводит все символы к нижнему регистру и заменяет Ё на Е
   * @param string строка, которую необходимо преобразовать
   * @returns строка, приведенная к нижнему регистру и с заменой Ё на Е
   */
  transformString(string: string | undefined): string | undefined {
    if (string) {
      return string.toLowerCase().replaceAll('ё', 'е');
    } else {
      return undefined;
    }
  }
  /**
   * Метод открывает всплывающее окно с сообщением. Закрытие окна по нажатию "ОК"
   * @param message отображаемое сообщение
   */
  openSnackBar(message: string): void {
    this.snackBar.open(message, 'ОК');
  }
  /**
   * Методя для обработки количества правильных ответов в массиве answers
   */
  checkAnswers(): void {
    if (this.answers.length == this.tests.length) {
      let counter = 0;
      for (let i = 0; i < this.tests.length; i++) {
        if (
          this.transformString(this.tests[i].correct) ==
          this.transformString(this.answers[i])
        )
          counter++;
      }
      this.auth
        .patchUserProgress(
          {
            correctAnswers: counter,
          },
          this.auth.getId()
        )
        .subscribe();
      this.openSnackBar('Количество правильных ответов: ' + counter);
    } else this.openSnackBar('Пожалуйста, ответьте на все вопросы');
  }

  /**
   * Метод сбрасывает все ответы в тесте
   */
  clearAnswers(): void {
    this.answers = this.answers.map((answer) => (answer = ''));
  }
}
