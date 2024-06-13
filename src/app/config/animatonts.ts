import { AnimationParams } from '../Interfaces/animation';
import { ComplicatedAnimation } from '../Interfaces/complicated-animation';

export const NAMELIST = [
  'BackBeamHolders',
  'Battery',
  'BottomBoard',
  'BottomBoardBackWires',
  'BottomBoardFrontWires',
  'BottomCover',
  'CameraModule',
  'CameraProtection',
  'Cooler',
  'DustFilter',
  'Frame',
  'FrontBeamsHolders',
  'FrontBoardBeamsWires',
  'GPSBoard',
  'GPSBoardWires',
  'GPSCover',
  'LampBack',
  'LeftBackBeam',
  'LeftBackBlades',
  'LeftBackEngine',
  'LeftBackScrews',
  'LeftBackSupport',
  'LeftFrontBeam',
  'LeftFrontBlades',
  'LeftFrontEngine',
  'LeftFrontScrews',
  'LeftFrontSupport',
  'MainBoard',
  'MainFrame',
  'Plugs',
  'RearBoardBeamsWires',
  'RightBackBeam',
  'RightBackBlades',
  'RightBackEngine',
  'RightBackScrews',
  'RightBackSupport',
  'RightFrontBeam',
  'RightFrontBlades',
  'RightFrontEngine',
  'RightFrontScrews',
  'RightFrontSupport',
  'ScrewBackBeamsGroup',
  'ScrewBackHolderGroup',
  'ScrewBottomGroup',
  'ScrewFrontBeamsGroup',
  'ScrewGPSGroup',
  'ScrewPlugFrameGroup',
  'ScrewPlugGroup',
  'ScrewTopGroup',
  'Sensors',
  'TopCover',
  'RearBoardBeamsWires',
];

export const TRANSLATED_NAMELIST = [
  'Держатели задних лучей',
  'Батарея',
  'Нижняя плата',
  'Провода задней части нижней платы',
  'Провода передней части нижней платы',
  'Нижняя крышка',
  'Модуль камеры',
  'Защита камеры',
  'Кулер',
  'Фильтр от пыли',
  'Корпус',
  'Держатели передних лучей',
  'Провода передних двигателей и ламп',
  'GPS плата',
  'Провода GPS платы',
  'Крышка GPS',
  'Задняя лампа',
  'Левый задний луч',
  'Левые задние лопасти',
  'Левый задний двигатель',
  'Левые задние винты',
  'Левая задняя опора',
  'Левый передний луч',
  'Левые передние лопасти',
  'Левый передний двигатель',
  'Левые передние винты',
  'Левая передняя опора',
  'Основная плата',
  'Корпус',
  'Заглушки',
  'Провода задних двигателей и ламп',
  'Правый задний луч',
  'Правые задние лопасти',
  'Правый задний двигатель',
  'Правые задние винты',
  'Правая задняя опора',
  'Правый передний луч',
  'Правые передние лопасти',
  'Правый передний двигатель',
  'Правые передние винты',
  'Правая передняя опора',
  'Группа винтов задних лучей',
  'Группа винтов задних держателей',
  'Группа винтов нижней крышки',
  'Группа винтов передних лучей',
  'Группа винтов GPS',
  'Группа винтов верхней крышки под заглушками',
  'Группа винтов заглушек',
  'Группа винтов верхней крышки',
  'Датчики',
  'Верхняя крышка',
  'Провода задних двигателей и ламп',
];

export const SHIFT = 20;

export const FRAME_RATE = 20;
//#region АНИМАЦИИ ОБСЛУЖИВАНИЯ
export const ASSSEMBLE_ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: SHIFT * 6,
    componentName: 'Battery',
    position: 'position.y',
    tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер',
    name: 'Снятие батареи',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: -SHIFT * 4,
    componentName: 'ScrewBottomGroup',
    position: 'position.y',
    tip: 'Открутите винты нижней крышки, всего 8 штук',
    name: 'Откручивание винтов нижней крышки',
    rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
    highlighted: ['ScrewBottomGroup'],
  },
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: 'BottomCover',
    position: 'position.y',
    tip: 'Снимите нижнюю крышку, потянув ее вниз',
    name: 'Снятие нижней крышки',
    rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
  },
  {
    from: 0,
    to: SHIFT * 8,
    componentName: 'ScrewTopGroup',
    position: 'position.y',
    tip: 'Открутите винты верхней крышки, всего 6 штук',
    name: 'Откручивание винтов верхней крышки',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
    highlighted: ['ScrewTopGroup'],
  },
  {
    from: 0,
    to: SHIFT * -5,
    componentName: ['ScrewPlugGroup'],
    position: 'position.y',
    tip: 'Открутите 2 винта заглушек',
    rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
    highlighted: ['ScrewPlugGroup'],
  },
  {
    from: 0,
    to: SHIFT * -4,
    componentName: 'Plugs',
    position: 'position.y',
    tip: 'Снимите заглушки, поддев их тонким предметом',
    rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
    highlighted: ['Plugs'],
  },
  {
    from: 0,
    to: SHIFT * -4,
    componentName: 'ScrewPlugFrameGroup',
    position: 'position.y',
    tip: 'Открутите 2 винта под заглушкой, которые удерживают верхнюю крышку',
    rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
    highlighted: ['ScrewPlugFrameGroup'],
  },
  {
    from: 0,
    to: SHIFT * 0.5,
    componentName: [
      'TopCover',
      'GPSBoard',
      'GPSCover',
      'GPSBoardWires',
      'ScrewGPSGroup',
    ],
    position: 'position.y',
    name: 'Снятие верхней крышки',
    tip: 'Немного приподнимите крышку вверх, чтобы отсоединить провод платы GPS',
    highlighted: [
      'GPSBoardWires_primitive0',
      'GPSBoardWires_primitive1',
      'GPSBoardWires_primitive2',
      'GPSBoardWires_primitive3',
      'GPSBoardWires_primitive4',
      'GPSBoardWires_primitive5',
      'GPSBoardWires_primitive6',
    ],
    rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
  },
  {
    from: SHIFT * 0.5,
    to: SHIFT * 5,
    componentName: [
      'TopCover',
      'GPSBoard',
      'GPSCover',
      'GPSBoardWires',
      'ScrewGPSGroup',
    ],
    position: 'position.y',
    name: 'Снятие верхней крышки',
    tip: 'После отключения провода поднимите крышку вверх.',
    highlighted: ['GPSBoardWires'],
    rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: 'CameraProtection',
    position: 'position.z',
    name: 'Снятие защиты камеры',
    tip: 'Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята.',
    rotationCamera: { alpha: Math.PI * 1.25, beta: Math.PI / 2 },
  },
  {
    from: 0,
    to: -SHIFT / 10,
    componentName: [
      'LeftFrontBlades',
      'RightFrontBlades',
      'LeftBackBlades',
      'RightBackBlades',
    ],
    position: 'position.y',
    tip: 'Надавите на лопасти, чтобы они опустилась вниз.',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: Math.PI / 12,
    componentName: [
      'LeftFrontBlades',
      'RightFrontBlades',
      'LeftBackBlades',
      'RightBackBlades',
    ],
    position: 'rotation.y',
    tip: 'Поверните лопасти против часовой стрелки.',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    from: -SHIFT / 10,
    to: SHIFT * 5,
    componentName: [
      'LeftFrontBlades',
      'RightFrontBlades',
      'LeftBackBlades',
      'RightBackBlades',
    ],
    position: 'position.y',
    tip: 'Снимите лопасти, подняв их вверх.',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: -SHIFT * 3,
    componentName: [
      'LeftFrontSupport',
      'RightFrontSupport',
      'RightBackSupport',
      'LeftBackSupport',
    ],
    position: 'position.y',
    tip: 'Снимите подставки лучей, поддев их тонким предметом',
    rotationCamera: { alpha: Math.PI, beta: Math.PI },
    highlighted: [
      'LeftFrontSupport',
      'RightFrontSupport',
      'RightBackSupport',
      'LeftBackSupport',
    ],
  },
  {
    from: 0,
    to: -SHIFT * 2,
    componentName: [
      'LeftFrontScrews',
      'RightFrontScrews',
      'LeftBackScrews',
      'RightBackScrews',
    ],
    position: 'position.y',
    tip: 'Открутите винты, удерживающие двигатели',
    rotationCamera: { alpha: Math.PI, beta: Math.PI },
    highlighted: [
      'LeftFrontScrews',
      'RightFrontScrews',
      'LeftBackScrews',
      'RightBackScrews',
    ],
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: [
      'LeftFrontEngine',
      'RightFrontEngine',
      'LeftBackEngine',
      'RightBackEngine',
    ],
    position: 'position.y',
    tip: 'Отсоедините двигатели, подняв их вверх, затем отпаяйте подсвеченные провода.',
    highlighted: [
      'LeftFrontBeam_primitive2',
      'RightFrontBeam_primitive2',
      'LeftBackBeam_primitive2',
      'RightBackBeam_primitive2',
    ],
    rotationCamera: { alpha: Math.PI * 1.5, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: -SHIFT * 5,
    componentName: 'BottomBoardFrontWires',
    highlighted: [
      'BottomBoardFrontWires_primitive0',
      'BottomBoardFrontWires_primitive1',
    ],
    position: 'position.y',
    tip: 'Отсоедините провода на нижней плате, потянув их вниз. Они питают антенны.',
    rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
  },
  {
    from: 0,
    to: SHIFT,
    componentName: 'FrontBoardBeamsWires',
    highlighted: [
      'FrontBoardBeamsWires_primitive1',
      'FrontBoardBeamsWires_primitive2',
    ],
    position: 'position.y',
    tip: 'Отпаяйте провода на верхней плате, а затем снимите их. Тонкие провода питают LED, толстые питают двигатели.',
    rotationCamera: { alpha: Math.PI, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: SHIFT * -4,
    componentName: 'ScrewFrontBeamsGroup',
    position: 'position.y',
    tip: 'Для снятие передних лучей необходимо открутить винты на держателях под заглушками.',
    highlighted: ['ScrewFrontBeamsGroup'],
    rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
  },
  {
    from: 0,
    to: SHIFT * -3,
    componentName: 'FrontBeamsHolders',
    position: 'position.y',
    tip: 'Далее необходимо снять держатели, потянув их вниз.',
    highlighted: ['FrontBeamsHolders'],
    rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
  },
  {
    from: 0,
    to: SHIFT * -3,
    componentName: 'LeftFrontBeam',
    position: 'position.x',
    tip: 'По очереди отсоедините лучи, сначала потянув левый в левую сторону.',
  },
  {
    from: 0,
    to: SHIFT * 3,
    componentName: 'RightFrontBeam',
    position: 'position.x',
    tip: 'Для снятия правого луча необходимо потянуть его в правую сторону.',
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'RearBoardBeamsWires',
    position: 'position.y',
    highlighted: [
      'RearBoardBeamsWires_primitive0',
      'RearBoardBeamsWires_primitive1',
      'RearBoardBeamsWires_primitive2',
    ],
    tip: 'Для снятия задних лучей необходимо отпаять на верхней плате провода, питающие двигатели.',
    rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: SHIFT * -5,
    componentName: 'BottomBoardBackWires',
    position: 'position.y',
    highlighted: [
      'BottomBoardBackWires_primitive0',
      'BottomBoardBackWires_primitive1',
    ],
    tip: 'Отсоедините провода на нижней плате, потянув их вниз. Они питают антенны.',
    rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'ScrewBackBeamsGroup',
    position: 'position.z',
    highlighted: ['ScrewBackBeamsGroup'],
    tip: 'Открутите 2 винта на задних лучах.',
    rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 2 },
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'ScrewBackHolderGroup',
    position: 'position.y',
    highlighted: ['ScrewBackHolderGroup'],
    tip: 'Открутите 4 винта держателей задних лучей.',
    rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: SHIFT * 2,
    componentName: 'BackBeamHolders',
    position: 'position.y',
    highlighted: ['BackBeamHolders'],
    tip: 'Снимите задние держатели, потянув их вверх',
    rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: SHIFT * -3,
    componentName: 'LeftBackBeam',
    position: 'position.x',
    tip: 'По очереди отсоедините лучи, сначала потянув левый в левую сторону.',
  },
  {
    from: 0,
    to: SHIFT * 3,
    componentName: 'RightBackBeam',
    position: 'position.x',
    tip: 'Для снятия правого луча потяните его в правую сторону.',
  },
  {
    from: SHIFT * 5,
    to: SHIFT * 2,
    componentName: 'ScrewGPSGroup',
    position: 'position.y',
    tip: 'Для снятия платы GPS открутите 2 винта, котрые удерживают крышку.',
    highlighted: ['ScrewGPSGroup'],
    rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
  },
  {
    from: SHIFT * 5,
    to: SHIFT * 3,
    componentName: ['GPSCover', 'GPSBoardWires', 'GPSBoard'],
    position: 'position.y',
    tip: 'Снимите крышку вместе с платой и проводами.',
    rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
  },
];

export const REPAIR_ANIMATIONS: AnimationParams[] = [];
//#region СЛОЖНЫЕ АНИМАЦИИ ОСБЛУЖИВАНИЯ
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
        tip: 'Надавите на лопасти, чтобы они опустилась вниз.',
      },
      {
        coordinates: [0, Math.PI / 12],
        position: 'rotation.y',
        tip: 'Поверните лопасти против часовой стрелки.',
      },
      {
        coordinates: [-SHIFT / 10, SHIFT],
        position: 'position.y',
        tip: 'Снимите лопасти подняв их вверх.',
      },
    ],
    name: 'Снятие лопастей',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
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

//#region АНИМАЦИИ РЕМОНТА
export const COMPLICATED_REPAIR_ANIMATIONS = [
  {
    //#region ЗАМЕНА НИЖНЕЙ КРЫШКИ
    name: 'Замена нижней крышки',
    animations: [
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['Battery_primitive1'],
        params: [
          {
            coordinates: [0, SHIFT * 6],
            position: 'position.y',
            tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер.',
            name: 'Снятие батареи',
          },
        ],
      },
      {
        componentName: 'ScrewBottomGroup',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewBottomGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Открутите винты нижней крышки, всего 8 штук.',
            name: 'Откручивание винтов нижней крышки',
          },
        ],
      },
      {
        componentName: 'BottomCover',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.y',
            tip: 'Снимите нижнюю крышку, потянув её вниз.',
            name: 'Снятие нижней крышки',
          },
        ],
      },

      {
        componentName: 'BottomCover',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.y',
            tip: 'Установите новую крышку, поднимая её вверх.',
          },
        ],
      },
      {
        componentName: 'ScrewBottomGroup',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewBottomGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите винты нижней крышки, всего 8 штук.',
          },
        ],
      },
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['Battery_primitive1'],
        params: [
          {
            coordinates: [SHIFT * 6, 0],
            position: 'position.y',
            tip: 'Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз.',
          },
        ],
      },
    ],
  },
  //#region ЗАМЕНА ВЕРХНЕЙ КРЫШКИ
  {
    name: 'Замена верхней крышки',
    animations: [
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['Battery_primitive1'],
        params: [
          {
            coordinates: [0, SHIFT * 6],
            position: 'position.y',
            tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер.',
            name: 'Снятие батареи',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [0, SHIFT * 8],
            position: 'position.y',
            tip: 'Открутите винты верхней крышки, всего 6 штук.',
            name: 'Откручивание винтов верхней крышки',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 5],
            position: 'position.y',
            tip: 'Открутите 2 винта заглушек.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Снимите заглушки, поддев их тонким предметом.',
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Открутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Немного приподнимите крышку вверх, чтобы отсоединить провод платы GPS.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, SHIFT * 5],
            position: 'position.y',
            tip: 'После отключения провода поднимите крышку вверх.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [SHIFT * 5, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Замените крышку на новую, после чего опустите ее вниз, чтобы подключить провод платы GPS.',
            name: 'Установка верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, 0],
            position: 'position.y',
            tip: 'После подключения провода опустите крышку вниз полностью.',
            highlighted: ['GPSBoardWires'],
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Установите заглушки, вставив их в отверстия.',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [-SHIFT * 5, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта заглушек.',
          },
        ],
      },
    ],
  },
  //#region ЗАМЕНА МОДУЛЯ GPS
  {
    name: 'Замена модуля GPS',
    animations: [
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['Battery_primitive1'],
        params: [
          {
            coordinates: [0, SHIFT * 6],
            position: 'position.y',
            tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер.',
            name: 'Снятие батареи',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [0, SHIFT * 8],
            position: 'position.y',
            tip: 'Открутите винты верхней крышки, всего 6 штук.',
            name: 'Откручивание винтов верхней крышки',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 5],
            position: 'position.y',
            tip: 'Открутите 2 винта заглушек.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Снимите заглушки, поддев их тонким предметом.',
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Открутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Немного приподнимите крышку вверх, чтобы отсоединить провод платы GPS.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, SHIFT * 5],
            position: 'position.y',
            tip: 'После отключения провода поднимите крышку вверх.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: 'ScrewGPSGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        params: [
          {
            coordinates: [SHIFT * 5, SHIFT * 2],
            position: 'position.y',
            tip: 'Для снятия платы GPS открутите 2 винта, которые удерживают крышку.',
          },
        ],
        highlighted: ['ScrewGPSGroup'],
      },
      {
        componentName: ['GPSCover', 'GPSBoardWires', 'GPSBoard'],
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        params: [
          {
            coordinates: [SHIFT * 5, SHIFT * 3],
            position: 'position.y',
            tip: 'Снимите крышку вместе с платой и проводами.',
          },
        ],
      },
      {
        componentName: ['GPSCover', 'GPSBoardWires', 'GPSBoard'],
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        params: [
          {
            coordinates: [SHIFT * 3, SHIFT * 5],
            position: 'position.y',
            tip: 'Установите новую плату с проводами и крышкой.',
          },
        ],
      },
      {
        componentName: 'ScrewGPSGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        params: [
          {
            coordinates: [SHIFT * 2, SHIFT * 5],
            position: 'position.y',
            tip: 'Закрутите 2 винта, чтобы закрепить плату GPS.',
          },
        ],
        highlighted: ['ScrewGPSGroup'],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [SHIFT * 5, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Замените крышку на новую, после чего опустите ее вниз, чтобы подключить провод платы GPS.',
            name: 'Установка верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, 0],
            position: 'position.y',
            tip: 'После подключения провода опустите крышку вниз полностью.',
            highlighted: ['GPSBoardWires'],
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Установите заглушки, вставив их в отверстия.',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [-SHIFT * 5, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта заглушек.',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [SHIFT * 8, 0],
            position: 'position.y',
            tip: 'Закрутите винты верхней крышки, всего 6 штук.',
            name: 'Закручивание винтов верхней крышки',
          },
        ],
      },
      {
        params: [
          {
            coordinates: [SHIFT * 3, 0],
            position: 'position.y',
            tip: `Установите батарею, вставив ее в корпус квадрокоптера и нажмите подсвеченные кнопки разблокировки, чтобы зафиксировать.`,
          },
        ],
        highlighted: ['Battery_primitive1'],
        componentName: 'Battery',
      },
    ],
  },
  //#region ЗАМЕНА ДВИГАТЕЛЕЙ
  {
    name: 'Замена двигателей',
    animations: [
      {
        params: [
          {
            coordinates: [0, SHIFT * 3],
            position: 'position.y',
            tip: `Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер. Возьмите аккумулятор с обеих сторон, нажмите подсвеченные кнопки разблокировки с обеих сторон, затем поднимите его.`,
          },
        ],
        highlighted: ['Battery_primitive1'],
        componentName: 'Battery',
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [0, -SHIFT / 10],
            position: 'position.y',
            tip: 'Надавите на лопасти, чтобы они опустилась вниз.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [0, Math.PI / 12],
            position: 'rotation.y',
            tip: 'Поверните лопасти против часовой стрелки.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [-SHIFT / 10, SHIFT * 4],
            position: 'position.y',
            tip: 'Снимите лопасти, подняв их вверх.',
          },
        ],
      },
      {
        componentName: [
          'LeftFrontSupport',
          'RightFrontSupport',
          'RightBackSupport',
          'LeftBackSupport',
        ],
        rotationCamera: { alpha: Math.PI, beta: Math.PI },
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.y',
            tip: 'Снимите подставки лучей, поддев их тонким предметом',
          },
        ],
        highlighted: [
          'LeftFrontSupport',
          'RightFrontSupport',
          'RightBackSupport',
          'LeftBackSupport',
        ],
      },
      {
        componentName: [
          'LeftFrontScrews',
          'RightFrontScrews',
          'LeftBackScrews',
          'RightBackScrews',
        ],
        rotationCamera: { alpha: Math.PI, beta: Math.PI },
        params: [
          {
            coordinates: [0, -SHIFT * 2],
            position: 'position.y',
            tip: 'Открутите винты, удерживающие двигатели',
          },
        ],
        highlighted: [
          'LeftFrontScrews',
          'RightFrontScrews',
          'LeftBackScrews',
          'RightBackScrews',
        ],
      },
      {
        componentName: [
          'LeftFrontEngine',
          'RightFrontEngine',
          'LeftBackEngine',
          'RightBackEngine',
        ],
        rotationCamera: { alpha: Math.PI * 1.5, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [0, SHIFT * 2],
            position: 'position.y',
            tip: 'Отсоедините двигатели, подняв их вверх, затем отпаяйте подсвеченные провода.',
          },
        ],
        highlighted: [
          'LeftFrontBeam_primitive2',
          'RightFrontBeam_primitive2',
          'LeftBackBeam_primitive2',
          'RightBackBeam_primitive2',
        ],
      },
      {
        componentName: [
          'LeftFrontEngine',
          'RightFrontEngine',
          'LeftBackEngine',
          'RightBackEngine',
        ],
        rotationCamera: { alpha: Math.PI * 1.5, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [SHIFT * 2, 0],
            position: 'position.y',
            tip: 'Установите новые двигатели на место старых и припаивайте подсвеченные провода.',
          },
        ],
        highlighted: [
          'LeftFrontBeam_primitive2',
          'RightFrontBeam_primitive2',
          'LeftBackBeam_primitive2',
          'RightBackBeam_primitive2',
        ],
      },
      {
        componentName: [
          'LeftFrontScrews',
          'RightFrontScrews',
          'LeftBackScrews',
          'RightBackScrews',
        ],
        rotationCamera: { alpha: Math.PI, beta: Math.PI },
        params: [
          {
            coordinates: [-SHIFT * 2, 0],
            position: 'position.y',
            tip: 'Закрутите винты, фиксирующие двигатели.',
          },
        ],
        highlighted: [
          'LeftFrontScrews',
          'RightFrontScrews',
          'LeftBackScrews',
          'RightBackScrews',
        ],
      },
      {
        componentName: [
          'LeftFrontSupport',
          'RightFrontSupport',
          'RightBackSupport',
          'LeftBackSupport',
        ],
        rotationCamera: { alpha: Math.PI, beta: Math.PI },
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.y',
            tip: 'Установите подставки лучей, нажав на них до щелчка.',
          },
        ],
        highlighted: [
          'LeftFrontSupport',
          'RightFrontSupport',
          'RightBackSupport',
          'LeftBackSupport',
        ],
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [SHIFT * 4, -SHIFT / 10],
            position: 'position.y',
            tip: 'Установите лопасти, опустив их вниз.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [Math.PI / 12, 0],
            position: 'rotation.y',
            tip: 'Поверните лопасти по часовой стрелке, чтобы зафиксировать их.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBlades',
          'LeftBackBlades',
          'LeftFrontBlades',
          'RightFrontBlades',
        ],
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [-SHIFT / 10, 0],
            position: 'position.y',
            tip: 'Поднимите лопасти вверх и зафиксируйте их.',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [SHIFT * 8, 0],
            position: 'position.y',
            tip: 'Закрутите винты верхней крышки, всего 6 штук.',
            name: 'Закручивание винтов верхней крышки',
          },
        ],
      },
      {
        params: [
          {
            coordinates: [SHIFT * 3, 0],
            position: 'position.y',
            tip: `Установите батарею, вставив ее в корпус квадрокоптера и нажмите подсвеченные кнопки разблокировки, чтобы зафиксировать.`,
          },
        ],
        highlighted: ['Battery_primitive1'],
        componentName: 'Battery',
      },
    ],
  },
  //#region ЗАМЕНА ЛУЧЕЙ
  {
    name: 'Замена лучей',
    animations: [
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [0, SHIFT * 6],
            position: 'position.y',
            tip: 'Первым шагом необходимо снять батарею, чтобы обесточить квадрокоптер.',
            name: 'Снятие батареи',
          },
        ],
      },
      {
        componentName: 'ScrewBottomGroup',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewBottomGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Открутите винты нижней крышки, всего 8 штук.',
            name: 'Откручивание винтов нижней крышки',
          },
        ],
      },
      {
        componentName: 'BottomCover',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.y',
            tip: 'Снимите нижнюю крышку, потянув её вниз.',
            name: 'Снятие нижней крышки',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [0, SHIFT * 8],
            position: 'position.y',
            tip: 'Открутите винты верхней крышки, всего 6 штук.',
            name: 'Откручивание винтов верхней крышки',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 5],
            position: 'position.y',
            tip: 'Открутите 2 винта заглушек.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Снимите заглушки, поддев их тонким предметом.',
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Открутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Немного приподнимите крышку вверх, чтобы отсоединить провод платы GPS.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, SHIFT * 5],
            position: 'position.y',
            tip: 'После отключения провода поднимите крышку вверх.',
            name: 'Снятие верхней крышки',
          },
        ],
      },
      {
        componentName: 'BottomBoardFrontWires',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        highlighted: [
          'BottomBoardFrontWires_primitive0',
          'BottomBoardFrontWires_primitive1',
        ],
        params: [
          {
            coordinates: [0, -SHIFT * 5],
            position: 'position.y',
            tip: 'Отсоедините провода на нижней плате, потянув их вниз. Они питают антенны.',
          },
        ],
      },
      {
        componentName: 'FrontBoardBeamsWires',
        rotationCamera: { alpha: Math.PI, beta: Math.PI / 4 },
        highlighted: [
          'FrontBoardBeamsWires_primitive1',
          'FrontBoardBeamsWires_primitive2',
        ],
        params: [
          {
            coordinates: [0, SHIFT],
            position: 'position.y',
            tip: 'Отпаяйте провода на верхней плате, а затем снимите их. Тонкие провода питают LED, толстые питают двигатели.',
          },
        ],
      },
      {
        componentName: 'ScrewFrontBeamsGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewFrontBeamsGroup'],
        params: [
          {
            coordinates: [0, -SHIFT * 4],
            position: 'position.y',
            tip: 'Для снятия передних лучей необходимо открутить винты на держателях под заглушками.',
          },
        ],
      },
      {
        componentName: 'FrontBeamsHolders',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['FrontBeamsHolders'],
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.y',
            tip: 'Далее необходимо снять держатели, потянув их вниз.',
          },
        ],
      },
      {
        componentName: [
          'LeftFrontBeam',
          'LeftFrontSupport',
          'LeftFrontEngine',
          'LeftFrontScrews',
          'LeftFrontBlades',
        ],
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.x',
            tip: 'По очереди отсоедините лучи, сначала потянув левый в левую сторону.',
          },
        ],
      },
      {
        componentName: [
          'RightFrontBeam',
          'RightFrontSupport',
          'RightFrontEngine',
          'RightFrontScrews',
          'RightFrontBlades',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 3],
            position: 'position.x',
            tip: 'Для снятия правого луча необходимо потянуть его в правую сторону.',
          },
        ],
      },
      {
        componentName: 'RearBoardBeamsWires',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: [
          'RearBoardBeamsWires_primitive0',
          'RearBoardBeamsWires_primitive1',
          'RearBoardBeamsWires_primitive2',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 2],
            position: 'position.y',
            tip: 'Для снятия задних лучей необходимо отпаять на верхней плате провода, питающие двигатели.',
          },
        ],
      },
      {
        componentName: 'BottomBoardBackWires',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        highlighted: [
          'BottomBoardBackWires_primitive0',
          'BottomBoardBackWires_primitive1',
        ],
        params: [
          {
            coordinates: [0, -SHIFT * 5],
            position: 'position.y',
            tip: 'Отсоедините провода на нижней плате, потянув их вниз. Они питают антенны.',
          },
        ],
      },
      {
        componentName: 'ScrewBackBeamsGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 2 },
        highlighted: ['ScrewBackBeamsGroup'],
        params: [
          {
            coordinates: [0, SHIFT * 2],
            position: 'position.z',
            tip: 'Открутите 2 винта на задних лучах.',
          },
        ],
      },
      {
        componentName: 'ScrewBackHolderGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: ['ScrewBackHolderGroup'],
        params: [
          {
            coordinates: [0, SHIFT * 2],
            position: 'position.y',
            tip: 'Открутите 4 винта держателей задних лучей.',
          },
        ],
      },
      {
        componentName: 'BackBeamHolders',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: ['BackBeamHolders'],
        params: [
          {
            coordinates: [0, SHIFT * 2],
            position: 'position.y',
            tip: 'Снимите задние держатели, потянув их вверх.',
          },
        ],
      },
      {
        componentName: [
          'LeftBackBeam',
          'LeftBackSupport',
          'LeftBackEngine',
          'LeftBackScrews',
          'LeftBackBlades',
        ],
        params: [
          {
            coordinates: [0, -SHIFT * 3],
            position: 'position.x',
            tip: 'По очереди отсоедините лучи, сначала потянув левый в левую сторону.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBeam',
          'RightBackSupport',
          'RightBackEngine',
          'RightBackScrews',
          'RightBackBlades',
        ],
        params: [
          {
            coordinates: [0, SHIFT * 3],
            position: 'position.x',
            tip: 'Для снятия правого луча потяните его в правую сторону.',
          },
        ],
      },
      {
        componentName: [
          'RightBackBeam',
          'RightBackSupport',
          'RightBackEngine',
          'RightBackScrews',
          'RightBackBlades',
        ],
        params: [
          {
            coordinates: [SHIFT * 3, 0],
            position: 'position.x',
            tip: 'Для установки правого заднего луча, вставьте его справа.',
          },
        ],
      },
      {
        componentName: [
          'LeftBackBeam',
          'LeftBackSupport',
          'LeftBackEngine',
          'LeftBackScrews',
          'LeftBackBlades',
        ],
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.x',
            tip: 'Для установки левого заднего луча, вставьте его слева.',
          },
        ],
      },
      {
        componentName: 'BackBeamHolders',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: ['BackBeamHolders'],
        params: [
          {
            coordinates: [SHIFT * 2, 0],
            position: 'position.y',
            tip: 'Установите задние держатели.',
          },
        ],
      },
      {
        componentName: 'ScrewBackHolderGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: ['ScrewBackHolderGroup'],
        params: [
          {
            coordinates: [SHIFT * 2, 0],
            position: 'position.y',
            tip: 'Закрутите 4 винта держателей задних лучей.',
          },
        ],
      },
      {
        componentName: 'ScrewBackBeamsGroup',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 2 },
        highlighted: ['ScrewBackBeamsGroup'],
        params: [
          {
            coordinates: [SHIFT * 2, 0],
            position: 'position.z',
            tip: 'Закрутите 2 винта на задних лучах.',
          },
        ],
      },
      {
        componentName: 'BottomBoardBackWires',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        highlighted: [
          'BottomBoardBackWires_primitive0',
          'BottomBoardBackWires_primitive1',
        ],
        params: [
          {
            coordinates: [-SHIFT * 5, 0],
            position: 'position.y',
            tip: 'Подсоедините провода на нижней плате.',
          },
        ],
      },
      {
        componentName: 'RearBoardBeamsWires',
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 4 },
        highlighted: [
          'RearBoardBeamsWires_primitive0',
          'RearBoardBeamsWires_primitive1',
          'RearBoardBeamsWires_primitive2',
        ],
        params: [
          {
            coordinates: [SHIFT * 2, 0],
            position: 'position.y',
            tip: 'Для установки задних лучей необходимо припаять на верхней плате провода, питающие двигатели.',
          },
        ],
      },
      {
        componentName: [
          'RightFrontBeam',
          'RightFrontSupport',
          'RightFrontEngine',
          'RightFrontScrews',
          'RightFrontBlades',
        ],
        params: [
          {
            coordinates: [SHIFT * 3, 0],
            position: 'position.x',
            tip: 'Для установки правого переднего луча, вставьте его справа.',
          },
        ],
      },
      {
        componentName: [
          'LeftFrontBeam',
          'LeftFrontSupport',
          'LeftFrontEngine',
          'LeftFrontScrews',
          'LeftFrontBlades',
        ],
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.x',
            tip: 'Для установки левого переднего луча, вставьте его слева.',
          },
        ],
      },
      {
        componentName: 'FrontBeamsHolders',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['FrontBeamsHolders'],
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.y',
            tip: 'Установите держатели.',
          },
        ],
      },
      {
        componentName: 'ScrewFrontBeamsGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewFrontBeamsGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите винты на держателях под заглушками для установки передних лучей.',
          },
        ],
      },
      {
        componentName: 'FrontBoardBeamsWires',
        rotationCamera: { alpha: Math.PI, beta: Math.PI / 4 },
        highlighted: [
          'FrontBoardBeamsWires_primitive1',
          'FrontBoardBeamsWires_primitive2',
        ],
        params: [
          {
            coordinates: [SHIFT, 0],
            position: 'position.y',
            tip: 'Припаяйте провода на верхней плате. Тонкие провода питают LED, толстые питают двигатели.',
          },
        ],
      },
      {
        componentName: 'BottomBoardFrontWires',
        rotationCamera: { alpha: Math.PI / 2, beta: (Math.PI / 4) * 3 },
        highlighted: [
          'BottomBoardFrontWires_primitive0',
          'BottomBoardFrontWires_primitive1',
        ],
        params: [
          {
            coordinates: [-SHIFT * 5, 0],
            position: 'position.y',
            tip: 'Подсоедините провода на нижней плате. Они питают антенны.',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: Math.PI / 2, beta: Math.PI / 2 },
        highlighted: [
          'GPSBoardWires_primitive0',
          'GPSBoardWires_primitive1',
          'GPSBoardWires_primitive2',
          'GPSBoardWires_primitive3',
          'GPSBoardWires_primitive4',
          'GPSBoardWires_primitive5',
          'GPSBoardWires_primitive6',
        ],
        params: [
          {
            coordinates: [SHIFT * 5, SHIFT * 0.5],
            position: 'position.y',
            tip: 'Немного опустите крышку вниз, чтобы подключить провод платы GPS.',
            name: 'Установка верхней крышки',
          },
        ],
      },
      {
        componentName: [
          'TopCover',
          'GPSBoard',
          'GPSCover',
          'GPSBoardWires',
          'ScrewGPSGroup',
        ],
        rotationCamera: { alpha: 0, beta: (Math.PI / 4) * 1.25 },
        params: [
          {
            coordinates: [SHIFT * 0.5, 0],
            position: 'position.y',
            tip: 'После подключения провода опустите крышку вниз полностью.',
            highlighted: ['GPSBoardWires'],
          },
        ],
      },
      {
        componentName: 'ScrewPlugFrameGroup',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugFrameGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта под заглушкой, которые удерживают верхнюю крышку.',
          },
        ],
      },
      {
        componentName: 'Plugs',
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['Plugs'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Установите заглушки, вставив их в отверстия.',
          },
        ],
      },
      {
        componentName: ['ScrewPlugGroup'],
        rotationCamera: { alpha: Math.PI * 1.5, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewPlugGroup'],
        params: [
          {
            coordinates: [-SHIFT * 5, 0],
            position: 'position.y',
            tip: 'Закрутите 2 винта заглушек.',
          },
        ],
      },
      {
        componentName: 'BottomCover',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        params: [
          {
            coordinates: [-SHIFT * 3, 0],
            position: 'position.y',
            tip: 'Установите нижнюю крышку, поднимая её вверх.',
          },
        ],
      },
      {
        componentName: 'ScrewBottomGroup',
        rotationCamera: { alpha: Math.PI, beta: (Math.PI / 2) * 1.5 },
        highlighted: ['ScrewBottomGroup'],
        params: [
          {
            coordinates: [-SHIFT * 4, 0],
            position: 'position.y',
            tip: 'Закрутите винты нижней крышки, всего 8 штук.',
          },
        ],
      },
      {
        componentName: 'ScrewTopGroup',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        highlighted: ['ScrewTopGroup'],
        params: [
          {
            coordinates: [SHIFT * 8, 0],
            position: 'position.y',
            tip: 'Закрутите винты верхней крышки, всего 6 штук.',
            name: 'Закручивание винтов верхней крышки',
          },
        ],
      },
      {
        componentName: 'Battery',
        rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
        params: [
          {
            coordinates: [SHIFT * 6, 0],
            position: 'position.y',
            tip: 'Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз.',
          },
        ],
      },
    ],
  },
];
//#region АНИМАЦИИ ОБСЛУЖИВАНИЯ
export const ANIMATIONS: AnimationParams[] = [
  {
    from: 0,
    to: SHIFT,
    componentName: 'Battery',
    name: 'Снятие батареи',
    position: 'position.y',
    highlighted: ['Battery_primitive1'],
    tip: 'Для снятия батареи нажмите на кнопки с обеих сторон, после чего поднимите ее вверх.',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    from: 0,
    to: -SHIFT,
    name: 'Снятие защиты камеры',
    componentName: 'CameraProtection',
    position: 'position.z',
    tip: 'Для снятия защиты камеры необходимо заднюю часть защиты потянуть в направлении от квадрокоптера, после чего защита будет снята.',
    rotationCamera: { alpha: 0, beta: Math.PI / 2 },
  },
  {
    to: 0,
    from: SHIFT,
    componentName: 'Battery',
    name: 'Установка батареи',
    position: 'position.y',
    tip: 'Для установки батареи нажмите на кнопки с обеих сторон, после чего опустите ее вниз.',
    rotationCamera: { alpha: Math.PI / 4, beta: Math.PI / 4 },
  },
  {
    to: 0,
    from: -SHIFT,
    name: 'Установка защиты камеры',
    componentName: 'CameraProtection',
    position: 'position.z',
    tip: 'Для установки защиты камеры необходимо под наклоном вставить сначала переднюю часть в имеющееся отверстие, затем заднюю.',
    rotationCamera: { alpha: 0, beta: Math.PI / 2 },
  },
];
//#region АНИМАЦИИ ВЗРЫВА
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
