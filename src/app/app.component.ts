import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {
    console.log(this.router.url);
  }
  /**
   * Метод отправляет пользователя на страницу "сценарии обслуживания"
   */
  goToService(): void {
    this.router.navigateByUrl('scene');
  }
  /**
   * Метод отправляет пользователя на страницу "сценарии ремонта"
   */
  goToRepair(): void {
    this.router.navigateByUrl('scene-repair');
  }
  /**
   * Метод отправляет пользователя на страницу "прохождение тестов"
   */
  goToTests(): void {
    this.router.navigateByUrl('tests');
  }
    /**
   * Метод отправляет пользователя на главную страницу
   */
  goHome(): void {
    this.router.navigateByUrl('main-page');
  }
}
