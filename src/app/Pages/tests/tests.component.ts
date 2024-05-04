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
        this.openSnackBar('Количество правильных ответов: ' + counter);
      }
    } else this.openSnackBar('Пожалуйста, ответьте хотя бы на один вопрос');
  }

  /**
   * Метод сбрасывает все ответы в тесте
   */
  clearAnswers(): void {
    this.answers = this.answers.map((answer) => (answer = ''));
  }
}
