import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameDescription = 'What is the result of the expression?';
const actions = ['+', '-', '*'];
const maxNumber = 1000;

const calcNumbers = (action, number1, number2) => {
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
  const actionIndex = getRandomInteger(1, actions.length);
  const action = actions[actionIndex];

  const number1 = getRandomInteger(1, maxNumber);
  const number2 = getRandomInteger(1, maxNumber);

  const correctAnswer = calcNumbers(action, number1, number2);

  return {
    question: `${number1} ${action} ${number2}`,
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainCalcGame = () => {
  runGame(gameDescription, generateQuestionData);
};

export default runBrainCalcGame;
