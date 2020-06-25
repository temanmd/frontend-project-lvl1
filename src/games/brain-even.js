import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const noticeText = 'Answer "yes" if the number is even, '
                   + 'otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateQuestionData = () => {
  const maxNumber = 1000;
  const number = getRandomInteger(maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question: number,
    correctAnswer,
  };
};

const runBrainEvenGame = () => {
  runGame(noticeText, generateQuestionData);
};

export default runBrainEvenGame;
