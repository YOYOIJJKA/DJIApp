import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from '../../Services/babylon.service';
import {
  ANIMATIONS,
  ANIMATION_NAMES,
  EXPLOSION_ANIMATIONS,
  REPAIR_ANIMATIONS,
  REPAIR_ANIMATION_NAMES,
  REPAIR_TIPS,
  TIPS,
} from '../../config/animatonts';
import { Router } from '@angular/router';
import { AnimationParams } from '../../Interfaces/animation';

@Component({
  selector: 'app-scene',
  templateUrl: './scene.component.html',
  styleUrls: ['./scene.component.scss'],
})
export class SceneComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  isBlowed: boolean = false;
  animations: AnimationParams[];
  animationsProcessing: boolean = false;
  tips: string[];
  tip: string = '';
  visible: boolean = false;
  animationNames: string[];
  selected: string = '';

  constructor(private babylonService: BabylonService, private router: Router) {
    this.animations = this.checkRoot() ? REPAIR_ANIMATIONS : ANIMATIONS;
    this.tips = this.checkRoot() ? REPAIR_TIPS : TIPS;
    this.animationNames = this.checkRoot()
      ? REPAIR_ANIMATION_NAMES
      : ANIMATION_NAMES;
  }

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    // this.babylonService.loadModel();
  }

  checkRoot(): boolean {
    return this.router.url == '/scene-repair';
  }
  /**
   * Метод запускает анимацию в зависимости от выбранного пункта в выпадающем списке
   */
  startAnimation(): void {
    let index: number = 0;

    this.animations.forEach((element) => {
      if (element.name == this.selected)
        index = this.animations.indexOf(element);
    });
    console.log(this.animations[index]);
    this.babylonService.animate(this.animations[index]);
    // switch (this.selected) {
    //   case this.animationNames[0]:
    //     this.animateBattery();
    //     break;
    //   case this.animationNames[1]:
    //     this.animateCP();
    //     break;
    //   case this.animationNames[2]:
    //     this.animateBlades();
    //     break;
    //   case this.animationNames[3]:
    //     this.animateBatteryBack();
    //     break;
    //   case this.animationNames[4]:
    //     this.animateCPBack();
    //     break;
    //   case this.animationNames[5]:
    //     this.animateBladesBack();
    //     break;
    //   default:
    //     break;
    // }
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

  // /**
  //  * Метод запускает анимацию снятия батареи
  //  */
  // animateBattery() {
  //   this.visible = true;
  //   this.tip = this.tips[0];
  //   this.babylonService.animate(
  //     this.animations[0].from,
  //     this.animations[0].to,
  //     this.animations[0].componentName,
  //     this.animations[0].position
  //   );
  // }
  // /**
  //  * Метод запускает анимацию установки батареи
  //  */
  // animateBatteryBack() {
  //   this.visible = true;
  //   this.tip = this.tips[3];
  //   this.babylonService.animate(
  //     this.animations[0].to,
  //     this.animations[0].from,
  //     this.animations[0].componentName,
  //     this.animations[0].position
  //   );
  // }
  // /**
  //  * Метод запускает анимацию снятия защиты камеры
  //  */
  // animateCP() {
  //   this.visible = true;
  //   this.tip = this.tips[1];
  //   this.babylonService.animate(
  //     this.animations[1].from,
  //     this.animations[1].to,
  //     this.animations[1].componentName,
  //     this.animations[1].position
  //   );
  // }
  // /**
  //  * Метод запускает анимацию установки защиты камеры
  //  */
  // animateCPBack() {
  //   this.visible = true;
  //   this.tip = this.tips[4];
  //   this.babylonService.animate(
  //     this.animations[1].to,
  //     this.animations[1].from,
  //     this.animations[1].componentName,
  //     this.animations[1].position
  //   );
  // }
  // /**
  //  * Метод запускает анимацию снятия лопастей
  //  */
  // animateBlades() {
  //   this.visible = true;
  //   this.tip = this.tips[2];
  //   for (let i = 2; i <= 5; i++) {
  //     this.babylonService.animate(
  //       this.animations[i].from,
  //       this.animations[i].to,
  //       this.animations[i].componentName,
  //       this.animations[i].position
  //     );
  //   }
  // }
  // /**
  //  * Метод запускает анимацию установки лопастей
  //  */
  // animateBladesBack() {
  //   this.visible = true;
  //   this.tip = this.tips[5];
  //   for (let i = 2; i <= 5; i++) {
  //     this.babylonService.animate(
  //       this.animations[i].to,
  //       this.animations[i].from,
  //       this.animations[i].componentName,
  //       this.animations[i].position
  //     );
  //   }
  // }
}
