import { AnimationParams } from '../Interfaces/animation';
import { ComplicatedAnimation } from '../Interfaces/complicated-animation';

export const NAMELIST = [
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

export const SHIFT = 20;

export const FRAME_RATE = 20;

export const ASSSEMBLE_ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: SHIFT * 4,
    componentName: 'Battery',
    position: 'position.y',
    tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер',
    name: 'Снятие батареи',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'ScrewBottomGroup',
    position: 'position.y',
    tip: 'Открутите винты нижней крышки, всего 8 штук',
    name: 'Откручивание винтов нижней крышки',
  },
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'BottomCover',
    position: 'position.y',
    tip: 'Снимите нижнюю крышку, потянув ее вниз',
    name: 'Снятие нижней крышки',
  },
  {
    from: 0,
    to: SHIFT * 6,
    componentName: 'ScrewTopGroup',
    position: 'position.y',
    tip: 'Открутите винты верхней крышки, всего 6 штук',
    name: 'Откручивание винтов верхней крышки',
  },
  {
    from: 0,
    to: SHIFT * -4,
    componentName: ['ScrewPlugGroup', 'Plugs'],
    position: 'position.y',
    tip: 'Открутите 2 винта заглушек, затем снимите заглушки и открутите еще 2 винта',
    name: 'Снятие заглушек',
  },
  {
    from: 0,
    to: SHIFT * 3,
    componentName: ['TopCover', 'GPSBoard'],
    position: 'position.y',
    name: 'Снятие верхней крышки',
    tip: 'Снимите верхнюю крышку, потянув ее вверх',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: 'CameraProtection',
    position: 'position.z',
    name: 'Снятие защиты камеры',
    tip: 'Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята.',
  },
];

export const REPAIR_ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: SHIFT * 4,
    componentName: 'Battery',
    position: 'position.y',
    tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер',
    name: 'Снятие батареи',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'ScrewBottomGroup',
    position: 'position.y',
    tip: 'Открутите винты нижней крышки, всего 8 штук',
    name: 'Откручивание винтов нижней крышки',
  },
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'BottomCover',
    position: 'position.y',
    tip: 'Снимите нижнюю крышку, потянув ее вниз',
    name: 'Снятие нижней крышки',
  },
];

export const COMPLICATED_ANIMATIONS: ComplicatedAnimation[] = [
  {
    componentName: [
      'RightBackBlades',
      'LeftBackBlades',
      'LeftFrontBlades',
      'RightFrontBlades',
    ],
    params: [
      {
        coordinates: [0, -SHIFT / 10],
        position: 'position.y',
        tip: 'Надавите на лопасть, чтобы она опустилась вниз.',
      },
      {
        coordinates: [0, Math.PI / 12],
        position: 'rotation.y',
        tip: 'Поверните лопасть против часовой стрелки.',
      },
      {
        coordinates: [-SHIFT / 10, SHIFT],
        position: 'position.y',
        tip: 'Снимите лопасть подняв ее вверх.',
      },
    ],
    name: 'Снятие лопастей',
  },
  {
    componentName: [
      'RightBackBlades',
      'LeftBackBlades',
      'LeftFrontBlades',
      'RightFrontBlades',
    ],
    params: [
      {
        coordinates: [SHIFT, -SHIFT / 10],
        position: 'position.y',
        tip: 'Наденьте лопасть на цилиндр, опустив ее вниз до упора.',
      },
      {
        coordinates: [Math.PI / 12, 0],
        position: 'rotation.y',
        tip: 'Поверните лопасть по часовой стрелке',
      },
      {
        coordinates: [-SHIFT / 10, 0],
        position: 'position.y',
        tip: 'Отпустите лопасть, после чего она поднимется вверх и будет установлена корректно.',
      },
    ],
    name: 'Установка лопастей',
  },
];

export const COMPLICATED_REPAIR_ANIMATIONS: ComplicatedAnimation[] = [
  
];

export const ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: SHIFT,
    componentName: 'Battery',
    name: 'Снятие батареи',
    position: 'position.y',
    tip: 'Для снятия батареи нажмите на кнопки с обеих сторон, после чего поднимите ее вверх.',
  },
  {
    from: 0,
    to: -SHIFT,
    name: 'Снятие защиты камеры',
    componentName: 'CameraProtection',
    position: 'position.z',
    tip: 'Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята.',
  },
  {
    to: 0,
    from: SHIFT,
    componentName: 'Battery',
    name: 'Установка батареи',
    position: 'position.y',
    tip: 'Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз.',
  },
  {
    to: 0,
    from: -SHIFT,
    name: 'Установка защиты камеры',
    componentName: 'CameraProtection',
    position: 'position.z',
    tip: 'Для установки защиты камеры необходимо под наклоном вставить сначала переднюю часть в имеющееся отверстие, затем заднюю.',
  },
];

export const EXPLOSION_ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'BottomBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'BottomCover',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 3,
    componentName: 'CameraModule',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 4,
    componentName: 'CameraProtection',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'Cooler',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'DustFilter',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: 'Frame',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: 'GPSBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'LampBack',
    position: 'position.y',
  },
  ///LEFT BACK
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'LeftBackBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    componentName: 'LeftBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'LeftBackEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    componentName: 'LeftBackScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'LeftBackSupport',
    position: 'position.z',
  },
  /// LEFT FRONT
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'LeftFrontBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    componentName: 'LeftFrontBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'LeftFrontEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    componentName: 'LeftFrontScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'LeftFrontSupport',
    position: 'position.z',
  },
  //RIGHT BACK
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'RightBackBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    componentName: 'RightBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'RightBackEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    componentName: 'RightBackScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'RightBackSupport',
    position: 'position.z',
  },
  //RIGHT FRONT
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'RightFrontBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    componentName: 'RightFrontBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'RightFrontEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    componentName: 'RightFrontScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'RightFrontSupport',
    position: 'position.z',
  },
  //OTHER
  {
    from: 0,
    to: -SHIFT * 1,
    componentName: 'MainBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    componentName: 'Plugs',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'ScrewPlugGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 5,
    componentName: 'ScrewBottomGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'ScrewTopGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: 'Sensors',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT,
    componentName: 'TopCover',
    position: 'position.y',
  },
];

// export const ANIMATION_NAMES = [
//   'Снятие батареи',
//   'Снятие защиты камеры',
//   'Снятие лопастей',
//   'Установка батареи',
//   'Установка защиты камеры',
//   'Установка лопастей',
// ];

// export const REPAIR_ANIMATION_NAMES = ['', ''];

// export const TIPS = [
//   '1. Для снятия батареи нажмите на кнопки с обеих сторон, после чего поднимите ее вверх',
//   '1. Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята',
//   '1. Надавите на лопасть, чтобы она опустилась вниз относительно луча. 2. Проверните лопасти против часовой стрелки. 3. Поднимите лопасть вверх, чтобы снять её.',
//   '1. Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз',
//   '1. Для установки защиты камеры необходимо под наклоном вставить сначала переднюю часть в имеющееся отверстие, затем заднюю.',
//   '1. Наденьте лопасть на цилиндр. 2. Надавите на лопасть, чтобы она встала в паз. 3. Проверните лопасти по часовой стрелке.',
// ];
