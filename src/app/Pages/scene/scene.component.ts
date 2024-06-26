import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import {
  ANIMATIONS,
  ASSSEMBLE_ANIMATIONS,
  COMPLICATED_ANIMATIONS,
  COMPLICATED_REPAIR_ANIMATIONS,
  EXPLOSION_ANIMATIONS,
  REPAIR_ANIMATIONS,
} from '../../config/animatonts';
import { Router } from '@angular/router';
import { AnimationParams } from '../../Interfaces/animation';
import { ComplicatedAnimation } from '../../Interfaces/complicated-animation';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvasRef!: ElementRef;

  isBlowed: boolean = false;
  animations: AnimationParams[];
  complicatedAnimations: ComplicatedAnimation[];
  animationsProcessing: boolean = false;
  tips: string[] = [];
  tip?: string;
  visible: boolean = false;
  selected: string = '';
  assemble: AnimationParams[] = ASSSEMBLE_ANIMATIONS;
  currentAnimation: number = 0;
  isSimpleAnimation: boolean = true;
  isComplicatedAnimation: boolean = false;
  spinnerMode: ProgressSpinnerMode = 'indeterminate';
  isDisabledSelect: boolean = true;
  selectedRepair?: string;
  allRepairAnimations: { name: string; animations: ComplicatedAnimation[] }[];

  constructor(
    private babylonService: BabylonService,
    private router: Router,
    private authService: AuthService
  ) {
    this.animations = this.checkRoot() ? REPAIR_ANIMATIONS : ANIMATIONS;
    this.allRepairAnimations = COMPLICATED_REPAIR_ANIMATIONS;
    this.isSimpleAnimation = !this.checkRoot();
    this.isComplicatedAnimation = this.checkRoot();
    this.complicatedAnimations = this.checkRoot()
      ? COMPLICATED_REPAIR_ANIMATIONS[0].animations
      : COMPLICATED_ANIMATIONS;
    if (this.checkAssemble()) {
      this.isSimpleAnimation = false;
      this.isComplicatedAnimation = false;
    }
  }

  ngOnDestroy(): void {
    this.saveCurrentAnimation();
  }

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    this.babylonService.loadModel().then(() => {
      this.spinnerMode = 'determinate';
      this.isDisabledSelect = false;
      this.authService.getUserProgress(this.authService.getId()).subscribe({
        next: (progress) => {
          if (progress.currentAnimationName) {
            this.isDisabledSelect = false;
            this.selected = progress.currentAnimationName;
          }
        },
      });
      this.authService
        .patchUserProgress(
          {
            currentPage: this.router.url,
          },
          this.authService.getId()
        )
        .subscribe();
    });
  }

  repairValueChanged() {
    this.currentAnimation = 0;
    if (this.selectedRepair) {
      this.complicatedAnimations = this.allRepairAnimations.find((value) =>
        value.name.includes(this.selectedRepair!)
      )!.animations;
    }
    this.createRepairAnimations();
  }

  createRepairAnimations() {
    this.babylonService.clearCurrentAnimation();
    this.babylonService.createComplicatedAnimation(
      this.complicatedAnimations[this.currentAnimation],
      false
    );
    this.babylonService.createComplicatedAnimation(
      this.babylonService.reverseAnimation(
        this.complicatedAnimations[this.currentAnimation]
      ),
      true
    );
  }

  stepForwardRepair() {
    if (this.currentAnimation < this.complicatedAnimations.length) {
      this.babylonService.stepForward(0);
      this.tip =
        this.complicatedAnimations[this.currentAnimation].params[0].tip;

      this.visible = Boolean(this.tip);
      this.currentAnimation++;
      if (this.currentAnimation < this.complicatedAnimations.length) {
        this.createRepairAnimations();
      }
    }
  }

  stepBackRepair() {
    if (this.currentAnimation > 0) {
      this.currentAnimation--;
      this.tip =
        this.complicatedAnimations[this.currentAnimation].params[0].tip;
      this.createRepairAnimations();
      this.babylonService.stepBack(0);
    }
  }

  saveCurrentAnimation() {
    if (this.selected) {
      this.authService
        .patchUserProgress(
          {
            currentAnimationName: this.selected,
          },
          this.authService.getId()
        )
        .subscribe();
    }
    if (this.selectedRepair) {
      this.authService
        .patchUserProgress(
          {
            currentAnimationName: this.selectedRepair,
          },
          this.authService.getId()
        )
        .subscribe();
    }
  }

  /**
   * Метод проверяет url == scene-repair
   * @returns boolean
   */
  checkRoot(): boolean {
    return this.router.url == '/scene-repair';
  }

  checkAssemble(): boolean {
    return this.router.url == '/assemble';
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
      this.tips = [];
      this.isSimpleAnimation = false;
      complicateAnimations[animationIndex].params.forEach((param) => {
        if (param.tip) {
          this.tips.push(param.tip);
        }
      });
      this.isComplicatedAnimation = true;
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
      this.isComplicatedAnimation = false;
    }
  }

  clearCurrentAnimation() {
    this.babylonService.resetPosition();
    this.tip = '';
    this.visible = false;
    this.currentAnimation = 0;
  }

  startAnimation() {
    this.babylonService.clearCurrentAnimation();
    let animationIndex: number | undefined;
    const animations = [...this.animations];
    animations.forEach((element, index) => {
      if (element.name == this.selected) {
        animationIndex = index;
      }
    });

    if (animationIndex != undefined) {
      this.tip = animations[animationIndex].tip;
      if (this.tip) {
        this.visible = true;
      }
      this.babylonService.animate(animations[animationIndex]);
    }
  }

  stepForward() {
    const animationsLength = this.babylonService.getCurrentAnimationsLength();
    if (animationsLength && animationsLength > this.currentAnimation) {
      this.tip = this.tips[this.currentAnimation];
      this.visible = Boolean(this.tip);
      this.babylonService.stepForward(this.currentAnimation);
      this.currentAnimation++;
    }
  }

  stepBack() {
    if (this.currentAnimation > 0) {
      this.currentAnimation--;
      this.tip = this.tips[this.currentAnimation];
      this.visible = Boolean(this.tip);
      this.babylonService.stepBack(this.currentAnimation);
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
        const newAnimation = {
          ...animation,
          from: animation.to,
          to: animation.from,
        };
        this.babylonService.animate(newAnimation);
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

  nextAnimation() {
    if (this.currentAnimation < this.assemble.length && !this.isDisabledSelect) {
      console.log(this.assemble[this.currentAnimation]);
      this.tip = this.assemble[this.currentAnimation].tip;
      if (this.tip) {
        this.visible = true;
      }
      this.babylonService.animate(this.assemble[this.currentAnimation]);
      this.currentAnimation++;
    }
  }
  previousAnimation() {
    if (this.currentAnimation > 0 && !this.isDisabledSelect) {
      this.currentAnimation--;
      const reversedAnimation: AnimationParams = {
        ...this.assemble[this.currentAnimation],
        from: this.assemble[this.currentAnimation].to,
        to: this.assemble[this.currentAnimation].from,
      };
      this.tip = reversedAnimation.tip;
      if (this.tip) {
        this.visible = true;
      }
      this.babylonService.animate(reversedAnimation);
    }
  }
}
