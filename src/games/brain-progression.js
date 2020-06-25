import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const noticeText = 'What number is missing in the progression?';

const generateQuestionData = () => {
  const stepNumber = getRandomInteger(10) + 1;
  const replaceIndex = getRandomInteger(10);
  const startNumber = getRandomInteger(100);
  let counter = startNumber;
  const numbers = [startNumber];

  for (let i = 0; i < 9; i += 1) {
    counter += stepNumber;
    numbers.push(counter);
  }

  const textNumbers = [...numbers];
  textNumbers[replaceIndex] = '..';
  const text = textNumbers.join(' ');
  const correctAnswer = numbers[replaceIndex];

  return {
    question: text,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainProgressionGame = () => {
  runGame(noticeText, generateQuestionData);
};

export default runBrainProgressionGame;
