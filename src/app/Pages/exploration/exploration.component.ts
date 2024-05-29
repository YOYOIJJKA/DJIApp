import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrl: './exploration.component.scss',
})
export class ExplorationComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;
  spinnerMode: ProgressSpinnerMode = 'indeterminate';

  constructor(
    private babylonService: BabylonService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    this.babylonService.loadModel().then(() => {
      this.spinnerMode = 'determinate';
    });
    this.babylonService.enableSelection();
    this.auth.patchUserProgress(
      {
        currentPage: this.router.url,
      },
      this.auth.getId()
    ).subscribe();
  }

  resetPosition() {
    this.babylonService.resetPosition();
  }
}
