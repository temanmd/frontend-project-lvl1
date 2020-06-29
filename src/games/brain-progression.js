import runGame from '../index.js';
import { getRandomInteger } from '../utils.js';

const gameDescription = 'What number is missing in the progression?';
const progressionLength = 10;
const maxStep = 10;

const generateProgression = (start, step, length) => {
  let currentItem = start;
  const result = [start];

  for (let i = 0; i < length - 1; i += 1) {
    currentItem += step;
    result.push(currentItem);
  }

  return result;
};

const generateQuestionData = () => {
  const step = getRandomInteger(1, maxStep);
  const replaceIndex = getRandomInteger(0, progressionLength - 1);
  const start = getRandomInteger(1, 100);
  const progression = generateProgression(start, step, progressionLength);
  const correctAnswer = progression[replaceIndex];

  progression[replaceIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: correctAnswer.toString(),
  };
};

const runBrainProgressionGame = () => {
  runGame(gameDescription, generateQuestionData);
};

export default runBrainProgressionGame;
