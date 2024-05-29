import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { AuthService } from './Services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public router: Router, private http: AuthService) {}

  ngOnInit(): void {
    if (this.http.checkAuth()) {
      this.http.getUserProgress(this.http.getId()).subscribe({
        next: (progress) => {
          if (progress.currentPage) {
            this.router.navigateByUrl(progress.currentPage);
          }
        },
      });
    }
  }

  logOut() {
    this.http.clearStorage();
    this.router.navigateByUrl('');
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

  goToAssemble(): void {
    this.router.navigateByUrl('assemble');
  }

  goToExploration() {
    this.router.navigateByUrl('exploration');
  }
}
