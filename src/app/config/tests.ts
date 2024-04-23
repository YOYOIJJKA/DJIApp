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
    question: 'Что самое полезное вы узнали из этой инструкции?',
    correct: 'Всё'
  }
];
