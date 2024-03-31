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
  goToService(): void {
    this.router.navigateByUrl('scene');
  }

  goToRepair(): void {
    this.router.navigateByUrl('scene-repair');
  }

  goToTests(): void {
    this.router.navigateByUrl('tests');
  }

  goHome(): void {
    this.router.navigateByUrl('main-page');
  }
}
