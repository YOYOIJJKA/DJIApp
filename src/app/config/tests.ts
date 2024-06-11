import { Test } from '../Interfaces/test';

export const TESTS: Test[] = [
  {
    question: 'Как называется квадрокоптер?',
    answers: ['DJI Mavic PRO', 'DJI Air', 'DJI PRO'],
    correct: 'DJI Mavic PRO',
  },
  {
    question: 'Как правильно снимать защиту камеры?',
    answers: [
      'Надавить на нее по направлению вверх от квадрокоптера',
      'Потянуть вниз по направлению от квадрокоптера',
    ],
    correct: 'Потянуть вниз по направлению от квадрокоптера',
  },
  {
    question: 'Как называется эта деталь?',
    answers: ['Защита камеры', 'Крышка'],
    correct: 'Защита камеры',
    img: '/assets/q1.jpg',
  },
  {
    question: 'Какой инструмент используется для снятия пропеллеров?',
    answers: [
      'Шестигранный ключ',
      'Отвертка',
      'Руками, поворачивая их против часовой стрелки',
    ],
    correct: 'Руками, поворачивая их против часовой стрелки',
  },
  {
    question:
      'С какой частотой рекомендуется проверять и очищать вентиляторы квадрокоптера?',
    answers: ['Каждые 5 полетов', 'Каждые 10 полетов', 'Каждые 20 полетов'],
    correct: 'Каждые 10 полетов',
  },
  {
    question:
      'Какие действия нужно предпринять, чтобы заменить мотор квадрокоптера?',
    answers: [
      'Открутить винты, отсоединить старый мотор и установить новый, затем закрепить винты',
      'Просто снять старый мотор и установить новый',
      'Обратиться в сервисный центр, замена мотора пользователем запрещена',
    ],
    correct:
      'Открутить винты, отсоединить старый мотор и установить новый, затем закрепить винты',
  },
  {
    question:
      'Какие действия нужно предпринять, чтобы заменить мотор квадрокоптера?',
    answers: [
      'Открутить винты, отсоединить старый мотор и установить новый, затем закрепить винты',
      'Просто снять старый мотор и установить новый',
      'Обратиться в сервисный центр, замена мотора пользователем запрещена',
    ],
    correct:
      'Открутить винты, отсоединить старый мотор и установить новый, затем закрепить винты',
  },
  {
    question:
      'Что необходимо заменить, если квадрокоптер теряет устойчивость во время полета?',
    correct: 'Лопасти',
  },
  {
    question:
      'Какой компонент используется для визуального контроля полета квадрокоптера через смартфон?',
    correct: 'Камера',
  },
];
