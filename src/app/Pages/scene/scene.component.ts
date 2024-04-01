import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import { ANIMATIONS, ANIMATION_NAMES, TIPS } from '../../config/animatonts';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  isBlowed: boolean = false;
  animations: { from: number; to: number; name: string; position: string }[];
  animationsProcessing: boolean = false;
  tips: string[];
  tip: string = '';
  visible: boolean = false;
  animationNames: string[];
  selected: string = '';

  constructor(private babylonService: BabylonService) {
    this.animations = ANIMATIONS;
    this.tips = TIPS;
    this.animationNames = ANIMATION_NAMES;
  }

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    // this.babylonService.loadModel();
  }

  startAnimation(): void {
    console.log(this.selected);
    switch (this.selected) {
      case this.animationNames[0]:
        this.animateBattery();
        break;
      case this.animationNames[1]:
        this.animateCP();
        break;
      case this.animationNames[2]:
        this.animateBlades();
        break;
      case this.animationNames[3]:
        this.animateBatteryBack();
        break;
      case this.animationNames[4]:
        this.animateCPBack();
        break;
      case this.animationNames[5]:
        this.animateBladesBack();
        break;
      default:
        break;
    }
  }

  blowUp() {
    this.visible = false;
    if (!this.isBlowed) {
      this.animations.forEach((animation) => {
        this.babylonService.animate(
          animation.from,
          animation.to,
          animation.name,
          animation.position
        );
      });
      this.isBlowed = true;
    } else {
      this.animations.forEach((animation) => {
        this.babylonService.animate(
          animation.to,
          animation.from,
          animation.name,
          animation.position
        );
      });
      this.isBlowed = false;
    }
  }

  animateCamera() {
    this.visible = false;
    if (!this.animationsProcessing) {
      this.babylonService.animateCamera();
      this.animationsProcessing = true;
    } else {
      this.babylonService.stopAnimations();
      this.animationsProcessing = false;
    }
  }

  toggleText() {
    if (this.visible) this.visible = false;
    else this.visible = true;
  }

  animateBattery() {
    this.visible = true;
    this.tip = this.tips[0];
    this.babylonService.animate(
      this.animations[0].from,
      this.animations[0].to,
      this.animations[0].name,
      this.animations[0].position
    );
  }

  animateBatteryBack() {
    this.visible = true;
    this.tip = this.tips[3];
    this.babylonService.animate(
      this.animations[0].to,
      this.animations[0].from,
      this.animations[0].name,
      this.animations[0].position
    );
  }

  animateCP() {
    this.visible = true;
    this.tip = this.tips[1];
    this.babylonService.animate(
      this.animations[1].from,
      this.animations[1].to,
      this.animations[1].name,
      this.animations[1].position
    );
  }

  animateCPBack() {
    this.visible = true;
    this.tip = this.tips[4];
    this.babylonService.animate(
      this.animations[1].to,
      this.animations[1].from,
      this.animations[1].name,
      this.animations[1].position
    );
  }

  animateBlades() {
    this.visible = true;
    this.tip = this.tips[2];
    for (let i = 2; i <= 5; i++) {
      this.babylonService.animate(
        this.animations[i].from,
        this.animations[i].to,
        this.animations[i].name,
        this.animations[i].position
      );
    }
  }

  animateBladesBack() {
    this.visible = true;
    this.tip = this.tips[5];
    for (let i = 2; i <= 5; i++) {
      this.babylonService.animate(
        this.animations[i].to,
        this.animations[i].from,
        this.animations[i].name,
        this.animations[i].position
      );
    }
  }
}
