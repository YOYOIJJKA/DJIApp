import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import {
  ANIMATIONS,
  ANIMATION_NAMES,
  COMPLICATED_ANIMATIONS,
  COMPLICATED_REPAIR_ANIMATIONS,
  EXPLOSION_ANIMATIONS,
  REPAIR_ANIMATIONS,
  REPAIR_ANIMATION_NAMES,
  REPAIR_TIPS,
  TIPS,
} from '../../config/animatonts';
import { Router } from '@angular/router';
import { AnimationParams } from '../../Interfaces/animation';
import { ComplicatedAnimation } from '../../Interfaces/complicated-animation';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  isBlowed: boolean = false;
  animations: AnimationParams[];
  complicatedAnimations: ComplicatedAnimation[];
  animationsProcessing: boolean = false;
  tips: string[];
  tip: string = '';
  visible: boolean = false;
  animationNames: string[];
  selected: string = '';
  currentAnimation: number = 0;

  constructor(private babylonService: BabylonService, private router: Router) {
    this.animations = this.checkRoot() ? REPAIR_ANIMATIONS : ANIMATIONS;
    this.complicatedAnimations = this.checkRoot()
      ? COMPLICATED_REPAIR_ANIMATIONS
      : COMPLICATED_ANIMATIONS;
    this.tips = this.checkRoot() ? REPAIR_TIPS : TIPS;
    this.animationNames = this.checkRoot()
      ? REPAIR_ANIMATION_NAMES
      : ANIMATION_NAMES;
  }

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    // this.babylonService.loadModel();
  }

  /**
   * Метод проверяет url == scene-repair
   * @returns boolean
   */
  checkRoot(): boolean {
    return this.router.url == '/scene-repair';
  }

  startAnimation() {
    let animationIndex: number | undefined;

    this.animations.forEach((element, index) => {
      if (element.name == this.selected) {
        animationIndex = index;
      }
    });

    if (animationIndex != undefined) {
      console.log(this.animations[animationIndex]);
      this.babylonService.animate(this.animations[animationIndex]);
    } else {
      this.complicatedAnimations.forEach((element, index) => {
        if (element.name == this.selected) {
          animationIndex = index;
        }
      });
      if (animationIndex != undefined) {
        console.log(this.complicatedAnimations[animationIndex]);
        this.babylonService.animateComplicated(
          this.complicatedAnimations[animationIndex]
        );
      }
    }
  }

  stepForward() {
    
  }

  stepBack() {
    
  }
  
  animateStepByStep() {

  }

  /**
   * Метод запускает анимацию "Взрыв" или останавливает ее, если она запущена
   */
  blowUp() {
    this.visible = false;
    if (!this.isBlowed) {
      EXPLOSION_ANIMATIONS.forEach((animation) => {
        this.babylonService.animate(animation);
      });
      this.isBlowed = true;
    } else {
      EXPLOSION_ANIMATIONS.forEach((animation) => {
        this.babylonService.animate(animation);
      });
      this.isBlowed = false;
    }
  }

  /**
   * Метод запускает анимацию камеры или останавливает ее, если она запущена
   */
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
  /**
   * Метод меняет отображение текста, скрывает при открытом и открывает при скрытом состоянии
   */
  toggleText() {
    if (this.visible) this.visible = false;
    else this.visible = true;
  }
}
