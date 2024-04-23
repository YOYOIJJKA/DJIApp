import { Injectable } from '@angular/core';
import { FRAME_RATE } from '../config/animatonts';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import { AnimationParams } from '../Interfaces/animation';
import { ComplicatedAnimation } from '../Interfaces/complicated-animation';

@Injectable({
  providedIn: 'root',
})
export class BabylonService {
  private engine!: BABYLON.Engine;
  private scene!: BABYLON.Scene;

  createScene(canvas: HTMLCanvasElement): void {
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = new BABYLON.Scene(this.engine);

    const camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      400,
      new BABYLON.Vector3(0, 0, 0),
      this.scene
    );
    camera.attachControl(canvas, true);
    camera.upperBetaLimit = null;
    camera.lowerBetaLimit = null;

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

    var skybox = BABYLON.Mesh.CreateBox(
      'BackgroundSkybox',
      2000,
      this.scene,
      undefined,
      BABYLON.Mesh.BACKSIDE
    );

    var backgroundMaterial = new BABYLON.BackgroundMaterial(
      'backgroundMaterial',
      this.scene
    );
    backgroundMaterial.reflectionTexture = new BABYLON.CubeTexture(
      'assets/textures/skybox',
      this.scene
    );
    backgroundMaterial.reflectionTexture.coordinatesMode =
      BABYLON.Texture.SKYBOX_MODE;
    skybox.material = backgroundMaterial;
  }

  loadModel() {
    BABYLON.SceneLoader.ImportMesh(
      '',
      'https://dl.dropbox.com/scl/fi/9w4y83j5dpffc9rflq8a7/DJI.glb?rlkey=ofykk9bn8gd86uv4lhkxvwu5j&raw=1',
      'DJI.glb',
      this.scene
    );
  }

  getChildNames(name: string): string[] {
    let names: string[];
    names = [];
    let index = 0;
    while (this.scene.getMeshByName(name + '_primitive' + index.toString())) {
      names.push(name + '_primitive' + index.toString());
      index++;
    }
    return names;
  }

  /**
   * Метод запускает анимацию в случае, когда компонент представлен в виде множества деталей
   * @param animationParams
   */
  animateArray(animationParams: AnimationParams) {
    if (Array.isArray(animationParams.componentName)) {
      animationParams.componentName.forEach((componentName) => {
        const newAnimationParams = animationParams;
        newAnimationParams.componentName = componentName;
        this.animate(newAnimationParams);
      });
    }
  }

  animateComplicatedArray(complicatedAnimationParams: ComplicatedAnimation) {
    if (Array.isArray(complicatedAnimationParams.componentName)) {
      complicatedAnimationParams.componentName.forEach((componentName) => {
        const newComplicatedAnimationParams = complicatedAnimationParams;
        newComplicatedAnimationParams.componentName = componentName;
        this.animateComplicated(newComplicatedAnimationParams);
      });
    }
  }
  /**
   * Массив componentName = каждому по анимации
   * Массив params = каждой координате по фрейму
   * position = alpha, beta, position.y, position.x, position.z
   * @param complicatedAnimationParams
   */
  animateComplicated(complicatedAnimationParams: ComplicatedAnimation) {
    if (!Array.isArray(complicatedAnimationParams.componentName)) {
      if (this.scene.getMeshByName(complicatedAnimationParams.componentName)) {
        const mesh = this.scene.getMeshByName(
          complicatedAnimationParams.componentName
        );
        const complicatedAnimations: BABYLON.Animation[] = [];

        complicatedAnimationParams.params.forEach((params) => {
          const newAnimation = new BABYLON.Animation(
            'Complicated' + complicatedAnimationParams.componentName,
            params.position,
            FRAME_RATE,
            BABYLON.Animation.ANIMATIONTYPE_FLOAT,
            BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
          );
          const keyFrames: BABYLON.IAnimationKey[] = [];
          params.coordinates.forEach((coordinate, index) => {
            keyFrames.push({
              frame: index * FRAME_RATE,
              value: coordinate,
            });
          });
          newAnimation.setKeys(keyFrames);
          complicatedAnimations.push(newAnimation);
        });
        this.startAnimation(mesh, complicatedAnimations);
      } else {
        this.animateComplicatedArray(complicatedAnimationParams);
      }
    } else {
      complicatedAnimationParams.componentName.forEach((element) => {
        const newAnimationParams = complicatedAnimationParams;
        newAnimationParams.componentName = element;
        this.animateComplicated(newAnimationParams);
      });
    }
  }

  /**
   * Метод запускает анимацию компонентов по введенным параметрам
   * @param animationParams параметры анимации
   */
  animate(animationParams: AnimationParams) {
    if (!Array.isArray(animationParams.componentName)) {
      if (this.scene.getMeshByName(animationParams.componentName)) {
        const mesh = this.scene.getMeshByName(animationParams.componentName);
        const slide = new BABYLON.Animation(
          'Slide' + animationParams.componentName,
          animationParams.position,
          FRAME_RATE,
          BABYLON.Animation.ANIMATIONTYPE_FLOAT,
          BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
        );
        const keyFrames = [];
        keyFrames.push({
          frame: 0,
          value: animationParams.from,
        });
        keyFrames.push({
          frame: FRAME_RATE,
          value: animationParams.to,
        });
        slide.setKeys(keyFrames);
        this.startAnimation(mesh, [slide]);
      } else {
        animationParams.componentName = this.getChildNames(
          animationParams.componentName
        );
        this.animateArray(animationParams);
      }
    } else {
      animationParams.componentName.forEach((element) => {
        const newAnimationParams = animationParams;
        newAnimationParams.componentName = element;
        this.animate(newAnimationParams);
      });
    }
  }

  startAnimation(mesh: any, animations: any) {
    this.scene.beginDirectAnimation(mesh, animations, 0, 4 * FRAME_RATE, false);
  }

  animateCamera() {
    let camera = this.scene.getCameraByName('camera');
    if (camera) {
      let animation = new BABYLON.Animation(
        'rotation',
        'alpha',
        30,
        BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE
      );
      let keys = [];
      keys.push({ frame: 0, value: 0 });
      keys.push({ frame: 1000, value: Math.PI * 2 });
      animation.setKeys(keys);
      camera.animations = [];
      camera.animations.push(animation);
    }
    this.scene.beginAnimation(camera, 0, 1000, false, 2);
  }

  stopAnimations() {
    this.scene.stopAllAnimations();
  }
}
