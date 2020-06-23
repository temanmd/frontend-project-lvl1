import runGame from '../index.js';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const runBrainEvenGame = () => {
  runGame(getNoticeText, generateQuestion, checkAnswer, getCorrectAnswer);
};

const getNoticeText = () =>
  'Answer "yes" if the number is even, otherwise answer "no".';

const getBooleanAnswer = (answer) => answer === ANSWER_YES;

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, question) => {
  if (![ANSWER_YES, ANSWER_NO].includes(answer)) {
    return false;
  }

  return isEven(question.number) === getBooleanAnswer(answer);
};

const getCorrectAnswer = (question) =>
  (isEven(question.number) ? ANSWER_YES : ANSWER_NO);

const generateQuestion = () => {
  const maxNumber = 1000;
  const number = Math.floor(Math.random() * Math.floor(maxNumber));

  return {
    number,
    text: number,
  };
};

export default runBrainEvenGame;
