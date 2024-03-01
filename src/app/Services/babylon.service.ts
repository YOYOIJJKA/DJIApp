import { Injectable } from '@angular/core';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

@Injectable({
  providedIn: 'root',
})
export class BabylonService {
  constructor() {}

  private engine!: BABYLON.Engine;
  private scene!: BABYLON.Scene;

  createScene(canvas: HTMLCanvasElement): void {
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = new BABYLON.Scene(this.engine);

    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      -Math.PI,
      Math.PI,
      2,
      new BABYLON.Vector3(100, 100, 100),
      this.scene
    );
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    );

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });

    window.addEventListener('resize', () => {
      this.engine.resize();
    });
  }

  loadModel(): void {
    console.log('STARTING DOWNLOAD');
    BABYLON.SceneLoader.ImportMesh(
      'DJI',
      'https://dl.dropbox.com/scl/fi/nkvnn7e6y4hw8k7q2qgs8/DJIBODY.stl?rlkey=52fvq3feeoldzci11aszv0go4&raw=1',
      'DJIBODY.stl',
      this.scene,
      function (meshes) {
        meshes.forEach((mesh) => {
          mesh.name = 'DJIBODY';
        });
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      'DJIBattery',
      'https://dl.dropbox.com/scl/fi/ejummz2t7wgrjq5j7yacq/DJIBATTERY.stl?rlkey=yep023d36trn17tokbdhl4iy6&raw=1',
      'DJIBATTERY',
      this.scene,
      function (meshes) {
        meshes.forEach((mesh) => {
          mesh.name = 'DJIBATTERY';
        });
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      'DJICP',
      'https://dl.dropbox.com/scl/fi/eowzu2qwfetdflnziczq7/DJICP.stl?rlkey=5fcyktqod1dn3xtuerb20jclx&raw=1',
      'DJICP',
      this.scene,
      (meshes) => {
        meshes.forEach((mesh) => {
          mesh.name = 'DJICP';
        });
      }
    );

    BABYLON.SceneLoader.ImportMesh(
      'DJIBLADES',
      'https://dl.dropbox.com/scl/fi/4wfba7u7qibnsbh2fnm36/DJIBLADES.stl?rlkey=qu2la5ksr8xxnjnij01pjxre9&raw=1',
      'DJIBLADES',
      this.scene,
      (meshes) => {
        meshes.forEach((mesh) => {
          mesh.name = 'DJIBLADES';
        });
      }
    );
  }

  animateBattery() {
    const DJI = this.scene.getMeshByName('DJIBATTERY');
    let frameRate = 10;
    let xSlide = new BABYLON.Animation(
      'xSlide',
      'position.y',
      frameRate,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    let keyFrames = [];

    keyFrames.push({
      frame: 0,
      value: 0,
    });

    keyFrames.push({
      frame: frameRate,
      value: 20,
    });

    // keyFrames.push({
    //   frame: 2 * frameRate,
    //   value: 20,
    // });

    xSlide.setKeys(keyFrames);
    this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  }

  animateCP() {
    const DJI = this.scene.getMeshByName('DJICP');
    let frameRate = 10;
    let xSlide = new BABYLON.Animation(
      'xSlide',
      'position.y',
      frameRate,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    let keyFrames = [];

    keyFrames.push({
      frame: 0,
      value: 0,
    });

    keyFrames.push({
      frame: frameRate,
      value: -20,
    });

    // keyFrames.push({
    //   frame: 2 * frameRate,
    //   value: 20,
    // });

    xSlide.setKeys(keyFrames);
    this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  }
}
