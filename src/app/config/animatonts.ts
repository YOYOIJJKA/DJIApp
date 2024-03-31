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

export const FRAME_RATE = 10;

export const ANIMATIONS = [
  {
    from: 0,
    to: SHIFT,
    name: 'Battery',
    position: 'position.y',
  },
  //Защита Камеры
  {
    from: 0,
    to: -SHIFT,
    name: 'CameraProtection',
    position: 'position.z',
  },
  //////////////////ЛОПАСТИ 2-3-4-5
  {
    from: 0,
    to: SHIFT * 2,
    name: 'RightBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'RightFrontBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'LeftBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'LeftFrontBlades',
    position: 'position.y',
  },
  //ВЗРЫВ 6 =>
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'BottomBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    name: 'BottomCover',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 3,
    name: 'CameraModule',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 4,
    name: 'CameraProtection',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    name: 'Cooler',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 3,
    name: 'DustFilter',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    name: 'Frame',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    name: 'GPSBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    name: 'LampBack',
    position: 'position.y',
  },
  ///LEFT BACK
  {
    from: 0,
    to: -SHIFT * 3,
    name: 'LeftBackBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    name: 'LeftBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'LeftBackEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    name: 'LeftBackScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'LeftBackSupport',
    position: 'position.z',
  },
  /// LEFT FRONT
  {
    from: 0,
    to: -SHIFT * 3,
    name: 'LeftFrontBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    name: 'LeftFrontBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'LeftFrontEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    name: 'LeftFrontScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'LeftFrontSupport',
    position: 'position.z',
  },
  //RIGHT BACK
  {
    from: 0,
    to: -SHIFT * 3,
    name: 'RightBackBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    name: 'RightBackBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'RightBackEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    name: 'RightBackScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'RightBackSupport',
    position: 'position.z',
  },
  //RIGHT FRONT
  {
    from: 0,
    to: -SHIFT * 3,
    name: 'RightFrontBeam',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT * 2.5,
    name: 'RightFrontBlades',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'RightFrontEngine',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2.5,
    name: 'RightFrontScrews',
    position: 'position.z',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'RightFrontSupport',
    position: 'position.z',
  },
  //OTHER
  {
    from: 0,
    to: -SHIFT * 1,
    name: 'MainBoard',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 3.5,
    name: 'Plugs',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 4,
    name: 'ScrewPlugGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 5,
    name: 'ScrewBottomGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: SHIFT * 2,
    name: 'ScrewTopGroup',
    position: 'position.y',
  },
  {
    from: 0,
    to: -SHIFT * 2,
    name: 'Sensors',
    position: 'position.z',
  },
  {
    from: 0,
    to: SHIFT,
    name: 'TopCover',
    position: 'position.y',
  },
];

export const ANIMATION_NAMES = [
  'Снятие батареи',
  'Снятие защиты камеры',
  'Снятие лопастей',
  'Установка батареи',
  'Установка защиты камеры',
  'Установка лопастей',
];

export const TIPS = [
  '1. Для снятия батареи нажмите на кнопки с обеих сторон, после чего поднимите ее вверх',
  '1. Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята',
  '1. Надавите на лопасть, чтобы она опустилась вниз относительно луча. 2. Проверните лопасти против часовой стрелки. 3. Поднимите лопасть вверх, чтобы снять её.',
  '1. Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз',
  '1. Для установки защиты камеры необходимо под наклоном вставить сначала переднюю часть в имеющееся отверстие, затем заднюю.',
  '1. Наденьте лопасть на цилиндр. 2. Надавите на лопасть, чтобы она встала в паз. 3. Проверните лопасти по часовой стрелке.',
];
