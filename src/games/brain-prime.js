import runGame from '../index.js';
import { ANSWER_YES, ANSWER_NO, getBooleanAnswer } from '../booleanAnswers.js';

const getNoticeText = () => (
  'Answer "yes" if given number is prime. Otherwise answer "no".'
);

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const checkAnswer = (answer, question) => {
  if (![ANSWER_YES, ANSWER_NO].includes(answer)) {
    return false;
  }

  return isPrime(question.number) === getBooleanAnswer(answer);
};

const getCorrectAnswer = (question) => (
  isPrime(question.number) ? ANSWER_YES : ANSWER_NO
);

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100);

  return {
    number,
    text: number,
  };
};

const runBrainPrimeGame = () => {
  runGame(getNoticeText, generateQuestion, checkAnswer, getCorrectAnswer);
};

export default runBrainPrimeGame;
