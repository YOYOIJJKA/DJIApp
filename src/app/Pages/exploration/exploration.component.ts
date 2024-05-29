import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-exploration',
  templateUrl: './exploration.component.html',
  styleUrl: './exploration.component.scss',
})
export class ExplorationComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  isDisabled: boolean = true;
  moveCamera: boolean = true;

  constructor(private babylonService: BabylonService) {}

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    this.babylonService.loadModel().then(() => {
      this.spinnerMode = 'determinate';
      this.isDisabled = false;
    });
  }

  switchMode() {
    this.moveCamera = !this.moveCamera;
    if (this.moveCamera) {
      // this.babylonService.removeBehaviour(this.canvasRef.nativeElement);
    } else {
      // this.babylonService.addBehaviour();
    }
  }
}
