import runGame from '../index.js';

const noticeText = 'What number is missing in the progression?';

const checkAnswer = (answer, question) => {
  const integerAnswer = parseInt(answer, 10);
  return question.answer === integerAnswer;
};

const getCorrectAnswer = (question) => question.answer;

const generateQuestion = () => {
  const stepNumber = Math.floor(Math.random() * 10) + 1;
  const replaceIndex = Math.floor(Math.random() * 10);
  const startNumber = Math.floor(Math.random() * Math.floor(100));
  let counter = startNumber;
  const numbers = [startNumber];

  for (let i = 0; i < 9; i += 1) {
    counter += stepNumber;
    numbers.push(counter);
  }

  const textNumbers = [...numbers];
  textNumbers[replaceIndex] = '..';
  const text = textNumbers.join(' ');
  const answer = numbers[replaceIndex];

  return {
    answer,
    numbers,
    text,
  };
};

const runBrainProgressionGame = () => {
  runGame(noticeText, generateQuestion, checkAnswer, getCorrectAnswer);
};

export default runBrainProgressionGame;
