import runGame from '../index.js';

const noticeText = 'Answer "yes" if given number is prime. '
                   + 'Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, s = Math.sqrt(number); i <= s; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
};

const generateQuestionData = () => {
  const number = Math.floor(Math.random() * 100);
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return {
    question: number,
    correctAnswer,
  };
};

const runBrainPrimeGame = () => {
  runGame(noticeText, generateQuestionData);
};

export default runBrainPrimeGame;
