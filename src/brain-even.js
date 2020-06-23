import readlineSync from 'readline-sync';
import runGame from './index.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const runBrainEvenGame = () => {
  runGame(generateQuestion, checkAnswer, getCorrectAnswer);
};

const getBooleanAnswer = (answer) => answer === ANSWER_YES;

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, question) => {
  if (![ANSWER_YES, ANSWER_NO].includes(answer)) {
    return false;
  }

  return isEven(question.number) === getBooleanAnswer(answer);
};

const getCorrectAnswer = (question) => {
  return isEven(question.number) ? ANSWER_YES : ANSWER_NO;
};

const generateQuestion = () => {
  const maxNumber = 1000;
  const number = Math.floor(Math.random() * Math.floor(maxNumber));

  return {
    number: number,
    text: number,
  };
};

export default runBrainEvenGame;
