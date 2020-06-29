import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameDescription = 'Answer "yes" if the number is even, '
                        + 'otherwise answer "no".';
const maxNumber = 1000;

const isEven = (number) => number % 2 === 0;

const generateQuestionData = () => {
  const number = getRandomInteger(1, maxNumber);
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return {
    question: String(number),
    correctAnswer,
  };
};

const runBrainEvenGame = () => {
  runGame(gameDescription, generateQuestionData);
};

export default runBrainEvenGame;
