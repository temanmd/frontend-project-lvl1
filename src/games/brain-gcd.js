import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const noticeText = 'Find the greatest common divisor of given numbers.';

const calcGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return calcGCD(number2, number1 % number2);
};

const generateQuestionData = () => {
  const maxNumber = 100;
  const number1 = getRandomInteger(maxNumber);
  const number2 = getRandomInteger(maxNumber);
  const correctAnswer = calcGCD(number1, number2);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainGCDGame = () => {
  runGame(noticeText, generateQuestionData);
};

export default runBrainGCDGame;
