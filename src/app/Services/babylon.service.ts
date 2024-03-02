import { Injectable } from '@angular/core';
import * as BABYLON from '@babylonjs/core';
import '@babylonjs/loaders';

@Injectable({
  providedIn: 'root',
})
export class BabylonService {

  // URL: { CPT: string, BATTERY: string, BODY: string, BLADES: string }

  // ledMaterial;
  // this.URL = {
  //   CPT: 'https://dl.dropbox.com/scl/fi/eowzu2qwfetdflnziczq7/DJICP.stl?rlkey=5fcyktqod1dn3xtuerb20jclx&raw=1 ',
  //   BATTERY: 'https://dl.dropbox.com/scl/fi/ejummz2t7wgrjq5j7yacq/DJIBATTERY.stl?rlkey=yep023d36trn17tokbdhl4iy6&raw=1',
  //   BODY: 'https://dl.dropbox.com/scl/fi/nkvnn7e6y4hw8k7q2qgs8/DJIBODY.stl?rlkey=52fvq3feeoldzci11aszv0go4&raw=1',
  //   BLADES: 'https://dl.dropbox.com/scl/fi/4wfba7u7qibnsbh2fnm36/DJIBLADES.stl?rlkey=qu2la5ksr8xxnjnij01pjxre9&raw=1'
  // }

  // this.ledMaterial = new BABYLON.StandardMaterial("ledMaterial", this.scene);
  // this.ledMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0); // красный цвет свечения





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
  }

  loadModel() {
    BABYLON.SceneLoader.ImportMesh('', 'https://dl.dropbox.com/scl/fi/9w4y83j5dpffc9rflq8a7/DJI.glb?rlkey=ofykk9bn8gd86uv4lhkxvwu5j&raw=1', 'DJI.glb', this.scene)
    // var cptMaterial = new BABYLON.StandardMaterial("cptMaterial", this.scene);
    // cptMaterial.diffuseColor = new BABYLON.Color3(0, 0.5, 1); // синий цвет
    // cptMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // отключаем отражение
    // cptMaterial.alpha = 0.8; // прозрачность материала

    // var bodyMaterial = new BABYLON.PBRMaterial("bodyMaterial", this.scene);
    // bodyMaterial.albedoColor = new BABYLON.Color3(0.9, 0.9, 0.9); // серый цвет
    // bodyMaterial.metallic = 0.5; // степень металличности
    // bodyMaterial.roughness = 0.1; // степень шероховатости

    // var ledMaterial = new BABYLON.StandardMaterial("ledMaterial", this.scene);
    // ledMaterial.emissiveColor = new BABYLON.Color3(1, 0, 0); // красный цвет свечения

    // this.loadModel1('CPT', cptMaterial,this.URL.CPT)
    // this.loadModel1('BODY', bodyMaterial, this.URL.BODY)
    // this.loadModel1('BLADES', bodyMaterial, this.URL.BLADES)
    // this.loadModel1('BATTERY', bodyMaterial, this.URL.BATTERY)
  }

  createText() {
    // let advancedTexture = BABYLON.AdvancedDynamicTexture.CreateFullscreenUI("UI");
    // let textBlock = new BABYLON.TextBlock()
    // textBlock.text = 'THIS IS WORKING';
    // textBlock.color = "white";
    // textBlock.fontSize = 24;
    // advancedTexture.addControl(textBlock);
    
  }

  getChildNames(name: string): string[] {
    let names: string[]
    names = []
    let index = 0;
    while (this.scene.getMeshByName(name + '_primitive' + index.toString())) {
      names.push(name + '_primitive' + index.toString())
      index++
    }
    console.log('FOUND MESHES NAMES =')
    console.log(names)
    return names
  }

  animateArray(from: number, to: number, names: string[], position: string) {
    names.forEach((name) => {
      this.animate(from, to, name, position)
    }
    )
  }

  animate(from: number, to: number, name: string, position: string) {
    if (this.scene.getMeshByName(name)) {
      const mesh = this.scene.getMeshByName(name)
      let frameRate = 10;
      let slide = new BABYLON.Animation(
        'Slide' + name, position, frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
      )
      let keyFrames = [];
      keyFrames.push({
        frame: 0,
        value: from
      })
      keyFrames.push({
        frame: frameRate,
        value: to
      })
      slide.setKeys(keyFrames)
      this.scene.beginDirectAnimation(mesh, [slide], 0, 4 * frameRate, true);
    }
    else { this.animateArray(from, to, this.getChildNames(name), position) }
  }


  animateCamera() {
    let camera = this.scene.getCameraByName('camera')
    if (camera) {
      let animation = new BABYLON.Animation("rotation", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
        BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
      let keys = [];
      keys.push({ frame: 0, value: 0 });
      keys.push({ frame: 1000, value: Math.PI * 2 });
      animation.setKeys(keys);
      camera.animations = [];
      camera.animations.push(animation);
    }
    this.scene.beginAnimation(camera, 0, 1000, false, 2)
  }

  stopAnimations() {
    this.scene.stopAllAnimations()
  }

  // loadModel1(name: string, material: BABYLON.StandardMaterial | BABYLON.PBRMaterial, URL: string) {
  //   BABYLON.SceneLoader.ImportMesh(name, URL, name, this.scene, (meshes) => {
  //     meshes.forEach((mesh) => {
  //       mesh.name = name;
  //       mesh.material = material
  //     })
  //   })
  // }

  // // loadModel(): void {
  // //   console.log('STARTING DOWNLOAD');

  // //   var cameraGuardMaterial = new BABYLON.StandardMaterial("cameraGuardMaterial", this.scene);
  // //   cameraGuardMaterial.diffuseColor = new BABYLON.Color3(0, 0.5, 1); // синий цвет
  // //   cameraGuardMaterial.specularColor = new BABYLON.Color3(0, 0, 0); // отключаем отражение
  // //   cameraGuardMaterial.alpha = 0.8; // прозрачность материала


  // //   BABYLON.SceneLoader.ImportMesh(
  // //     'DJI',
  // //     'https://dl.dropbox.com/scl/fi/nkvnn7e6y4hw8k7q2qgs8/DJIBODY.stl?rlkey=52fvq3feeoldzci11aszv0go4&raw=1',
  // //     'DJIBODY.stl',
  // //     this.scene,
  // //     function (meshes) {
  // //       console.log('DOWNLOAD FINISHED')
  // //       meshes.forEach((mesh) => {
  // //         mesh.name = 'DJIBODY';
  // //       });
  // //     }
  // //   );

  // //   BABYLON.SceneLoader.ImportMesh(
  // //     'DJIBattery',
  // //     'https://dl.dropbox.com/scl/fi/ejummz2t7wgrjq5j7yacq/DJIBATTERY.stl?rlkey=yep023d36trn17tokbdhl4iy6&raw=1',
  // //     'DJIBATTERY',
  // //     this.scene,
  // //     function (meshes) {
  // //       meshes.forEach((mesh) => {
  // //         mesh.name = 'DJIBATTERY';
  // //       });
  // //     }
  // //   );

  // //   BABYLON.SceneLoader.ImportMesh(
  // //     'DJICP',
  // //     'https://dl.dropbox.com/scl/fi/eowzu2qwfetdflnziczq7/DJICP.stl?rlkey=5fcyktqod1dn3xtuerb20jclx&raw=1',
  // //     'DJICP',
  // //     this.scene,
  // //     (meshes) => {
  // //       meshes.forEach((mesh) => {
  // //         mesh.name = 'DJICP';
  // //         mesh.material = cameraGuardMaterial
  // //       });
  // //     }
  // //   );



  // //   BABYLON.SceneLoader.ImportMesh(
  // //     'DJIBLADES',
  // //     'https://dl.dropbox.com/scl/fi/4wfba7u7qibnsbh2fnm36/DJIBLADES.stl?rlkey=qu2la5ksr8xxnjnij01pjxre9&raw=1',
  // //     'DJIBLADES',
  // //     this.scene,
  // //     (meshes) => {
  // //       meshes.forEach((mesh) => {
  // //         mesh.name = 'DJIBLADES';
  // //       });
  // //     }
  // //   );
  // // }


  // animateBattery(direction: boolean) {
  //   const DJI = this.scene.getMeshByName('DJIBATTERY');
  //   let frameRate = 10;
  //   let xSlide = new BABYLON.Animation(
  //     'xSlide',
  //     'position.y',
  //     frameRate,
  //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  //   );

  //   let keyFrames = [];
  //   if (!direction) {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 0,
  //     });

  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 20,
  //     });
  //   }
  //   else {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 20,
  //     })
  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 0,
  //     });
  //   }

  //   xSlide.setKeys(keyFrames);
  //   this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  // }

  // animateCP(direction: boolean) {
  //   const DJI = this.scene.getMeshByName('DJICP');
  //   let frameRate = 10;
  //   let xSlide = new BABYLON.Animation(
  //     'xSlide',
  //     'position.y',
  //     frameRate,
  //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  //   );

  //   let keyFrames = [];

  //   if (!direction) {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 0,
  //     });

  //     keyFrames.push({
  //       frame: frameRate,
  //       value: -20,
  //     });
  //   }
  //   else {
  //     keyFrames.push({
  //       frame: 0,
  //       value: -20,
  //     })
  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 0,
  //     });
  //   }
  //   xSlide.setKeys(keyFrames);
  //   this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  // }

  // animateBlade(direction: boolean) {
  //   this.animateBladeDown(direction)
  //   this.animateBladeUp(direction)
  // }

  // animateBladeDown(direction: boolean) {
  //   const DJI = this.scene.getMeshByName('DJIBLADES');
  //   let frameRate = 10;
  //   let xSlide = new BABYLON.Animation(
  //     'xSlide',
  //     'position.y',
  //     frameRate,
  //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  //   );

  //   let keyFrames = [];

  //   if (!direction) {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 0,
  //     });

  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 10,
  //     });
  //   }
  //   else {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 10,
  //     })
  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 0,
  //     });
  //   }

  //   xSlide.setKeys(keyFrames);
  //   this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  // }

  // animateBladeUp(direction: boolean) {
  //   const DJI = this.scene.getMeshByName('DJIBLADES');
  //   let frameRate = 10;
  //   let xSlide = new BABYLON.Animation(
  //     'xSlide',
  //     'position.y',
  //     frameRate,
  //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  //   );

  //   let keyFrames = [];
  //   if (!direction) {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 0,
  //     });

  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 20,
  //     });
  //   }
  //   else {
  //     keyFrames.push({
  //       frame: 0,
  //       value: 20,
  //     })
  //     keyFrames.push({
  //       frame: frameRate,
  //       value: 0,
  //     });
  //   }


  //   // keyFrames.push({
  //   //   frame: 2 * frameRate,
  //   //   value: 20,
  //   // });

  //   xSlide.setKeys(keyFrames);
  //   this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  // }

  // animateBladeRotate(direction: boolean) {
  //   const DJI = this.scene.getMeshByName('DJIBLADES');
  //   let frameRate = 10;
  //   let xSlide = new BABYLON.Animation(
  //     'xSlide',
  //     'rotation.y',
  //     frameRate,
  //     BABYLON.Animation.ANIMATIONTYPE_FLOAT,
  //     BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT
  //   );

  //   let keyFrames = [];

  //   keyFrames.push({
  //     frame: 0,
  //     value: 0,
  //   });
  //   if (direction)
  //     keyFrames.push({
  //       frame: frameRate,
  //       value: Math.PI / 4,
  //     });
  //   else keyFrames.push({
  //     frame: frameRate,
  //     value: -Math.PI / 4,
  //   })



  //   // keyFrames.push({
  //   //   frame: 2 * frameRate,
  //   //   value: 20,
  //   // });

  //   xSlide.setKeys(keyFrames);
  //   this.scene.beginDirectAnimation(DJI, [xSlide], 0, 2 * frameRate, true);
  // }
}
