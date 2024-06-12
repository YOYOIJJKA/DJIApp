import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from '../../Services/auth.service';
import { Router } from '@angular/router';
import { NAMELIST, TRANSLATED_NAMELIST } from '../../config/animatonts';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrl: './exploration.component.scss',
})
export class ExplorationComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  label: string = '';

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
    this.babylonService.tip$.subscribe((tip) => {
      console.log('Mesh name is ' + tip);
      this.label = this.tipToLabel(tip);
    });
    this.babylonService.animateCamera();
    this.babylonService.enableSelection();
    this.auth
      .patchUserProgress(
        {
          currentPage: this.router.url,
        },
        this.auth.getId()
      )
      .subscribe();
  }

  tipToLabel(tip: string) {
    let index: number = NAMELIST.findIndex((value) => tip.includes(value));

    if (index != -1) {
      return TRANSLATED_NAMELIST[index];
    } else return '';
  }

  resetPosition() {
    this.babylonService.resetPosition();
  }
}
