import runGame from '../index.js';

const noticeText = 'What is the result of the expression?';

const checkAnswer = (answer, question) => {
  const integerAnswer = parseInt(answer, 10);
  switch (question.action) {
    case '+':
      return integerAnswer === question.number1 + question.number2;
    case '-':
      return integerAnswer === question.number1 - question.number2;
    case '*':
      return integerAnswer === question.number1 * question.number2;
    default:
      return false;
  }
};

const getCorrectAnswer = (question) => {
  switch (question.action) {
    case '+':
      return question.number1 + question.number2;
    case '-':
      return question.number1 - question.number2;
    case '*':
      return question.number1 * question.number2;
    default:
      return null;
  }
};

const generateQuestion = () => {
  const actions = ['+', '-', '*'];
  const actionIndex = Math.floor(Math.random() * 3);
  const action = actions[actionIndex];

  const maxNumber = 1000;
  const number1 = Math.floor(Math.random() * Math.floor(maxNumber));
  const number2 = Math.floor(Math.random() * Math.floor(maxNumber));

  return {
    number1,
    number2,
    action,
    text: `${number1} ${action} ${number2}`,
  };
};

const runBrainCalcGame = () => {
  runGame(noticeText, generateQuestion, checkAnswer, getCorrectAnswer);
};

export default runBrainCalcGame;
