import { Injectable } from '@angular/core';
import { FRAME_RATE } from '../config/animatonts';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';
import { AnimationParams } from '../Interfaces/animation';
import { ComplicatedAnimation } from '../Interfaces/complicated-animation';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BabylonService {
  private engine!: BABYLON.Engine;
  private scene!: BABYLON.Scene;
  private meshes: BABYLON.Nullable<BABYLON.AbstractMesh>[] = [];
  private currentAnimations: BABYLON.Animation[] = [];
  private reversedCurrentAnimation: BABYLON.Animation[] = [];
  private camera!: BABYLON.ArcRotateCamera;
  private canvas?: HTMLCanvasElement;
  private originalMaterials: Map<string, BABYLON.Material> = new Map();
  private highlightedMeshes?: string[];
  private tipSubject = new BehaviorSubject<string>('');
  tip$ = this.tipSubject.asObservable();
  private lightBlueGlowMaterial?: BABYLON.StandardMaterial;
  private cameraRotation?: { alpha: number; beta: number };

  createScene(canvas: HTMLCanvasElement): void {
    this.engine = new BABYLON.Engine(canvas, true);
    this.scene = new BABYLON.Scene(this.engine);
    this.canvas = canvas;
    this.camera = new BABYLON.ArcRotateCamera(
      'camera',
      Math.PI / 2,
      Math.PI / 2,
      400,
      new BABYLON.Vector3(0, 0, 0),
      this.scene
    );
    this.camera.attachControl(this.canvas, true);
    this.camera.upperBetaLimit = null;
    this.camera.lowerBetaLimit = null;
    new BABYLON.StandardMaterial('lightBlueGlowMaterial', this.scene);
    this.lightBlueGlowMaterial = new BABYLON.StandardMaterial(
      'lightBlueGlowMaterial',
      this.scene
    );
    this.lightBlueGlowMaterial.diffuseColor = new BABYLON.Color3(0.5, 0.7, 1.0);
    this.lightBlueGlowMaterial.emissiveColor = new BABYLON.Color3(
      0.3,
      0.5,
      0.9
    );

    const light = new BABYLON.HemisphericLight(
      'light',
      new BABYLON.Vector3(0, 1, 0),
      this.scene
    );

    const secondLight = new BABYLON.HemisphericLight(
      'secondLight',
      new BABYLON.Vector3(0, -100, 0),
      this.scene
    )

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

  loadModel(): Promise<BABYLON.ISceneLoaderAsyncResult> {
    return BABYLON.SceneLoader.ImportMeshAsync(
      '',
      'https://dl.dropbox.com/scl/fi/9w4y83j5dpffc9rflq8a7/DJI.glb?rlkey=ofykk9bn8gd86uv4lhkxvwu5j&st=59lb623c&raw=1', //DJI.glb
      'DJI.glb',
      this.scene,
      () => {
        return true;
      }
    );
  }

  rotateCameraSlowly(targetAlpha: number, targetBeta: number): void {
    const alphaAnimation = new BABYLON.Animation(
      'alphaAnimation',
      'alpha',
      20,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    const alphaKeys = [];
    alphaKeys.push({
      frame: 0,
      value: this.camera.alpha,
    });
    alphaKeys.push({
      frame: 60,
      value: targetAlpha,
    });

    alphaAnimation.setKeys(alphaKeys);

    const betaAnimation = new BABYLON.Animation(
      'betaAnimation',
      'beta',
      60,
      BABYLON.Animation.ANIMATIONTYPE_FLOAT,
      BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
    );

    const betaKeys = [];
    betaKeys.push({
      frame: 0,
      value: this.camera.beta,
    });
    betaKeys.push({
      frame: 50,
      value: targetBeta,
    });

    betaAnimation.setKeys(betaKeys);

    this.camera.animations = [];
    this.camera.animations.push(alphaAnimation);
    this.camera.animations.push(betaAnimation);

    this.scene.beginAnimation(this.camera, 0, 100, false, 1.0);
  }

  addBehaviour(mesh: BABYLON.AbstractMesh) {
    this.camera.detachControl();
    mesh.addBehavior(new BABYLON.PointerDragBehavior());
  }

  removeBehaviour() {
    this.camera.attachControl(this.canvas, true);
    this.scene.meshes.forEach((mesh) => {
      mesh.behaviors.forEach((behavior) => {
        mesh.removeBehavior(behavior);
      });
    });
  }

  enableSelection() {
    this.scene.meshes.forEach((mesh) => {
      mesh.isPickable = true;
    });
    this.scene.onPointerDown = (evt, pickResult) => {
      this.scene.stopAllAnimations();
      if (
        pickResult.hit &&
        pickResult.pickedMesh &&
        pickResult.pickedMesh.name != 'BackgroundSkybox'
      ) {
        this.setTip(pickResult.pickedMesh.name);
        this.addBehaviour(pickResult.pickedMesh);
      }
    };
    this.scene.onPointerUp = () => {
      this.removeBehaviour();
    };
  }

  setTip(newTip: string) {
    this.tipSubject.next(newTip);
  }

  resetPosition() {
    this.scene.meshes.forEach((mesh) => {
      mesh.position = new BABYLON.Vector3(0, 0, 0);
    });
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

  setNewMaterial(meshName: string, newMaterial: BABYLON.Material): void {
    const mesh = this.scene.getMeshByName(meshName) as BABYLON.Mesh;
    if (mesh) {
      if (!this.originalMaterials.has(meshName) && mesh.material) {
        this.originalMaterials.set(meshName, mesh.material);
      }
      mesh.material = newMaterial;
    } else {
      console.warn(`Mesh с именем ${meshName} не найдена внутри сцены`);
    }
  }

  startAnimation = (
    mesh: any,
    animations: any,
    beginFrame: number = 0,
    endFrame: number = 100
  ) => {
    if (this.cameraRotation) {
      this.rotateCameraSlowly(
        this.cameraRotation.alpha,
        this.cameraRotation.beta
      );
    }

    this.originalMaterials.forEach((material, meshName) => {
      const mesh = this.scene.getMeshByName(meshName);
      if (mesh) {
        mesh.material = material;
      }
    });
    this.originalMaterials.clear();

    if (this.highlightedMeshes)
      this.highlightedMeshes.forEach((mesh) => {
        this.setNewMaterial(mesh, this.lightBlueGlowMaterial!);
      });

    setTimeout(
      () => {
        this.scene.beginDirectAnimation(
          mesh,
          animations,
          beginFrame,
          endFrame,
          false
        );
      },
      this.cameraRotation ? 3500 : 0
    );
  };

  clearCurrentAnimation() {
    this.meshes = [];
    this.currentAnimations = [];
    this.reversedCurrentAnimation = [];
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

  createComplicatedAnimationArray(
    complicatedAnimationParams: ComplicatedAnimation,
    reversed: boolean
  ) {
    if (Array.isArray(complicatedAnimationParams.componentName)) {
      complicatedAnimationParams.componentName.forEach((componentName) => {
        const newComplicatedAnimationParams = complicatedAnimationParams;
        newComplicatedAnimationParams.componentName = componentName;
        this.createComplicatedAnimation(
          newComplicatedAnimationParams,
          reversed
        );
      });
    }
  }

  reverseAnimation(animation: ComplicatedAnimation) {
    let newAnimation = { ...animation };
    newAnimation.params = newAnimation.params.map((param) => {
      const newParam = {
        ...param,
        coordinates: [...param.coordinates].reverse(),
      };
      return newParam;
    });
    return newAnimation;
  }

  createBabylonAnimation(
    complicatedAnimationParams: ComplicatedAnimation
  ): BABYLON.Animation[] {
    this.highlightedMeshes = complicatedAnimationParams.highlighted
      ? complicatedAnimationParams.highlighted
      : undefined;

    this.cameraRotation = complicatedAnimationParams.rotationCamera
      ? complicatedAnimationParams.rotationCamera
      : undefined;

    const complicatedAnimations: BABYLON.Animation[] = [];
    complicatedAnimationParams.params.forEach((params) => {
      const newAnimation = new BABYLON.Animation(
        'Complicated' +
          complicatedAnimationParams.componentName +
          params.position +
          params.coordinates,
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
    return complicatedAnimations;
  }
  /**
   * Массив componentName = каждому по анимации
   * Массив params = каждой координате по фрейму
   * position = alpha, beta, position.y, position.x, position.z
   * @param complicatedAnimationParams
   */
  createComplicatedAnimation(
    complicatedParams: ComplicatedAnimation,
    reversed: boolean
  ) {
    const complicatedAnimationParams = { ...complicatedParams };
    if (!Array.isArray(complicatedAnimationParams.componentName)) {
      if (this.scene.getMeshByName(complicatedAnimationParams.componentName)) {
        const mesh = this.scene.getMeshByName(
          complicatedAnimationParams.componentName
        );
        this.meshes.push(mesh);
        if (!reversed) {
          this.currentAnimations = this.createBabylonAnimation(
            complicatedAnimationParams
          );
        } else
          this.reversedCurrentAnimation = this.createBabylonAnimation(
            complicatedAnimationParams
          );
      } else {
        complicatedAnimationParams.componentName = this.getChildNames(
          complicatedAnimationParams.componentName as string
        );
        this.createComplicatedAnimationArray(
          complicatedAnimationParams,
          reversed
        );
      }
    } else {
      this.createComplicatedAnimationArray(
        complicatedAnimationParams,
        reversed
      );
    }
  }

  /**
   * Метод запускает анимацию компонентов по введенным параметрам
   * @param animationParams параметры анимации
   */
  animate(simpleParams: AnimationParams) {
    this.highlightedMeshes = simpleParams.highlighted
      ? simpleParams.highlighted
      : undefined;

    this.cameraRotation = simpleParams.rotationCamera
      ? simpleParams.rotationCamera
      : undefined;
    const animationParams = { ...simpleParams };
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
        this.startAnimation(mesh, [slide], 0, FRAME_RATE);
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

  stepForward(animationIndex: number) {
    if (this.meshes && this.currentAnimations) {
      const highestFrame = 100;
      const animation = this.currentAnimations[animationIndex];

      this.meshes.forEach((mesh) => {
        this.startAnimation(mesh, [animation], 0, highestFrame);
      });
    }
  }

  stepBack(animationIndex: number) {
    if (this.meshes && this.reversedCurrentAnimation[animationIndex]) {
      const highestFrame = 100;
      const animation = this.reversedCurrentAnimation[animationIndex];

      this.meshes.forEach((mesh) => {
        this.startAnimation(mesh, [animation], 0, highestFrame);
      });
    }
  }

  getCurrentAnimationsLength(): number | undefined {
    return this.currentAnimations?.length;
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
    this.scene.beginAnimation(camera, 0, 2000, false, 2);
  }

  stopAnimations() {
    this.scene.stopAllAnimations();
  }
}
