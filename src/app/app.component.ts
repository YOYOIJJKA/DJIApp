import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from './Services/babylon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  constructor(private babylonService: BabylonService) {}

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    this.babylonService.loadModel();
  }

  animateBattery()
  {
    this.babylonService.animateBattery()
  }
}
