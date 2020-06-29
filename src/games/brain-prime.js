import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameDescription = 'Answer "yes" if given number is prime. '
                        + 'Otherwise answer "no".';
const maxNumber = 100;

const isPrime = (number) => {
  for (let divider = 2; divider <= Math.sqrt(number); divider += 1) {
    if (number % divider === 0) return false;
  }
  return number > 1;
};

const generateQuestionData = () => {
  const number = getRandomInteger(1, maxNumber);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: String(number),
    correctAnswer,
  };
};

const runBrainPrimeGame = () => {
  runGame(gameDescription, generateQuestionData);
};

export default runBrainPrimeGame;
