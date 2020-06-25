import runGame from '../index.js';

const noticeText = 'What is the result of the expression?';

const getCorrectAnswer = (action, number1, number2) => {
  switch (action) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      return null;
  }
};

const generateQuestionData = () => {
  const actions = ['+', '-', '*'];
  const actionIndex = Math.floor(Math.random() * 3);
  const action = actions[actionIndex];

  const maxNumber = 1000;
  const number1 = Math.floor(Math.random() * Math.floor(maxNumber));
  const number2 = Math.floor(Math.random() * Math.floor(maxNumber));

  const correctAnswer = getCorrectAnswer(action, number1, number2);

  return {
    question: `${number1} ${action} ${number2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainCalcGame = () => {
  runGame(noticeText, generateQuestionData);
};

export default runBrainCalcGame;
