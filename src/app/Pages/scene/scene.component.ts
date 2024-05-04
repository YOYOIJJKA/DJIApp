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
  isSimpleAnimation: boolean = true;

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
    this.babylonService.loadModel();
  }

  /**
   * Метод проверяет url == scene-repair
   * @returns boolean
   */
  checkRoot(): boolean {
    return this.router.url == '/scene-repair';
  }

  valueChanged() {
    this.currentAnimation = 0;
    this.setComplicatedAnimation(this.selected);
  }

  setComplicatedAnimation(searchValue: string) {
    const complicateAnimations = this.complicatedAnimations;
    let animationIndex: number | undefined;
    complicateAnimations.forEach((element, index) => {
      if (element.name == searchValue) {
        animationIndex = index;
      }
    });
    if (animationIndex != undefined) {
      this.isSimpleAnimation = false;
      this.babylonService.createComplicatedAnimation(
        complicateAnimations[animationIndex],
        false
      );
      this.babylonService.createComplicatedAnimation(
        this.babylonService.reverseAnimation(
          complicateAnimations[animationIndex]
        ),
        true
      );
    } else {
      this.isSimpleAnimation = true;
    }
  }

  clearCurrentAnimation() {
    this.currentAnimation = 0;
  }

  startAnimation() {
    this.babylonService.clearCurrentAnimation();
    let animationIndex: number | undefined;
    const animations = { ...this.animations };
    this.animations.forEach((element, index) => {
      if (element.name == this.selected) {
        animationIndex = index;
      }
    });

    if (animationIndex != undefined) {
      this.babylonService.animate(animations[animationIndex]);
    }
  }

  stepForward() {
    const animationsLength = this.babylonService.getCurrentAnimationsLength();
    if (animationsLength && animationsLength > this.currentAnimation) {
      this.babylonService.stepForward(this.currentAnimation);
      this.currentAnimation++;
    }
  }

  stepBack() {
    if (this.currentAnimation > 0) {
      this.babylonService.stepBack(this.currentAnimation - 1);
      this.currentAnimation--;
    }
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
