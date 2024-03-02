import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { BabylonService } from './Services/babylon.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('canvas') canvasRef!: ElementRef;

  namesList = [
    'Battery',
    'BottomBoard',
    'BottomCover',
    'CameraModule',
    'CameraProtection',
    'Cooler',
    'DustFilter',
    'Frame',
    'GPSBoard',
    'LampBack',
    'LeftBackBeam',
    'LeftBackBlades',
    'LeftBackEngine',
    'LeftBackScrews',
    'LeftBackSupport',
    'LeftFrontBeam',
    'LeftFrontBlades',
    'LeftFrontEngine',
    'LeftFrontLamp',
    'LeftFrontScrews',
    'LeftFrontSupport',
    'MainBoard',
    'Plugs',
    'RightBackBeam',
    'RightBackBlades',
    'RightBackEngine',
    'RightBackScrews',
    'RightBackSupport',
    'RightFrontBeam',
    'RightFrontBlades',
    'RightFrontEngine',
    'RightFrontLamp',
    'RightFrontScrews',
    'RightFrontSupport',
    'ScrewBottomGroup',
    'ScrewPlugGroup',
    'ScrewTopGroup',
    'Sensors',
  ];

  shift = 20;
  isBlowed: boolean = false;
  animations: { from: number; to: number; name: string; position: string }[];
  animationsProcessing: boolean = false;
  tips: string[];
  tip: string = '';
  visible: boolean = false;

  constructor(private babylonService: BabylonService) {
    //Батарея
    this.animations = [
      {
        from: 0,
        to: this.shift,
        name: 'Battery',
        position: 'position.y',
      },
      //Защита Камеры
      {
        from: 0,
        to: -this.shift,
        name: 'CameraProtection',
        position: 'position.z',
      },
      //////////////////ЛОПАСТИ 2-3-4-5
      {
        from: 0,
        to: this.shift * 2,
        name: 'RightBackBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'RightFrontBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'LeftBackBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'LeftFrontBlades',
        position: 'position.y',
      },
      //ВЗРЫВ 6 =>
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'BottomBoard',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 4,
        name: 'BottomCover',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 3,
        name: 'CameraModule',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 4,
        name: 'CameraProtection',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 4,
        name: 'Cooler',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 3,
        name: 'DustFilter',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2,
        name: 'Frame',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2,
        name: 'GPSBoard',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 4,
        name: 'LampBack',
        position: 'position.y',
      },
      ///LEFT BACK
      {
        from: 0,
        to: -this.shift * 3,
        name: 'LeftBackBeam',
        position: 'position.z',
      },
      {
        from: 0,
        to: this.shift * 2.5,
        name: 'LeftBackBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'LeftBackEngine',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2.5,
        name: 'LeftBackScrews',
        position: 'position.z',
      },
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'LeftBackSupport',
        position: 'position.z',
      },
      /// LEFT FRONT
      {
        from: 0,
        to: -this.shift * 3,
        name: 'LeftFrontBeam',
        position: 'position.z',
      },
      {
        from: 0,
        to: this.shift * 2.5,
        name: 'LeftFrontBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'LeftFrontEngine',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2.5,
        name: 'LeftFrontScrews',
        position: 'position.z',
      },
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'LeftFrontSupport',
        position: 'position.z',
      },
      //RIGHT BACK
      {
        from: 0,
        to: -this.shift * 3,
        name: 'RightBackBeam',
        position: 'position.z',
      },
      {
        from: 0,
        to: this.shift * 2.5,
        name: 'RightBackBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'RightBackEngine',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2.5,
        name: 'RightBackScrews',
        position: 'position.z',
      },
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'RightBackSupport',
        position: 'position.z',
      },
      //RIGHT FRONT
      {
        from: 0,
        to: -this.shift * 3,
        name: 'RightFrontBeam',
        position: 'position.z',
      },
      {
        from: 0,
        to: this.shift * 2.5,
        name: 'RightFrontBlades',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'RightFrontEngine',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2.5,
        name: 'RightFrontScrews',
        position: 'position.z',
      },
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'RightFrontSupport',
        position: 'position.z',
      },
      //OTHER
      {
        from: 0,
        to: -this.shift * 1,
        name: 'MainBoard',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 3.5,
        name: 'Plugs',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 4,
        name: 'ScrewPlugGroup',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 5,
        name: 'ScrewBottomGroup',
        position: 'position.y',
      },
      {
        from: 0,
        to: this.shift * 2,
        name: 'ScrewTopGroup',
        position: 'position.y',
      },
      {
        from: 0,
        to: -this.shift * 2,
        name: 'Sensors',
        position: 'position.z',
      },
      {
        from: 0,
        to: this.shift,
        name: 'TopCover',
        position: 'position.y',
      },
    ];
    this.tips = [
      '1. Для снятия батареи нажмите на кнопки с обеих сторон, после чего поднимите ее вверх',
      '1. Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята',
      '1. Надавите на лопасть, чтобы она опустилась вниз относительно луча. 2. Проверните лопасти против часовой стрелки. 3. Поднимите лопасть вверх, чтобы снять её.',
      '',
      '1. Для установки защиты камеры необходимо под наклоном вставить сначала переднюю часть в имеющееся отверстие, затем заднюю.',
      '1. Наденьте лопасть на цилиндр. 2. Надавите на лопасть, чтобы она встала в паз. 3. Проверните лопасти по часовой стрелке.',
    ];
  }

  ngAfterViewInit(): void {
    this.babylonService.createScene(this.canvasRef.nativeElement);
    this.babylonService.loadModel();
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
