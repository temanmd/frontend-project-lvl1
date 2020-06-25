import runGame from '../index.js';

const noticeText = 'Find the greatest common divisor of given numbers.';

const calcGCD = (number1, number2) => {
  if (!number2) {
    return number1;
  }

  return calcGCD(number2, number1 % number2);
};

const checkAnswer = (answer, question) => {
  const integerAnswer = parseInt(answer, 10);
  const numbersGCD = calcGCD(question.number1, question.number2);
  return numbersGCD === integerAnswer;
};

const getCorrectAnswer = (question) => (
  calcGCD(question.number1, question.number2)
);

const generateQuestion = () => {
  const maxNumber = 100;
  const number1 = Math.floor(Math.random() * Math.floor(maxNumber));
  const number2 = Math.floor(Math.random() * Math.floor(maxNumber));

  return {
    number1,
    number2,
    text: `${number1} ${number2}`,
  };
};

const runBrainGCDGame = () => {
  runGame(noticeText, generateQuestion, checkAnswer, getCorrectAnswer);
};

export default runBrainGCDGame;
