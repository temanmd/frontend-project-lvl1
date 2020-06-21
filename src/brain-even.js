import readlineSync from 'readline-sync';

const ANSWER_YES = 'yes';
const ANSWER_NO = 'no';

const runGame = () => {
  const state = {
    correctAnswers: 0,
    isError: false,
  };

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  do {
    const number = getRandomInteger();
    console.log(`Question: ${number}`);
    const answer = getAnswer();
    const isCorrectAnswer = checkAnswer(answer, number);
    if (isCorrectAnswer) {
      state.correctAnswers += 1;
      console.log('Correct!');
    } else {
      state.isError = true;
      showErrorText(answer, number, name);
    }
  } while (needToAskAnotherQuestion(state));

  if (!state.isError) {
    console.log(`Congratulations, ${name}!`);
  }
};

const getBooleanAnswer = (answer) => answer === ANSWER_YES;

const isEven = (number) => number % 2 === 0;

const checkAnswer = (answer, number) => {
  if (![ANSWER_YES, ANSWER_NO].includes(answer)) {
    return false;
  }

  return isEven(number) === getBooleanAnswer(answer);
};

const getCorrectAnswer = (number) => (isEven(number) ? ANSWER_YES : ANSWER_NO);

const showErrorText = (answer, number, name) => {
  let result = `"${answer}" is wrong answer ;(. `;
  result += `Correct answer was "${getCorrectAnswer(number)}".\n`;
  result += `Let's try again, ${name}!`;

  console.log(result);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const needToAskAnotherQuestion = (state) =>
  state.correctAnswers < 3 && !state.isError;

const getRandomInteger = () => {
  const maxNumber = 1000;

  return Math.floor(Math.random() * Math.floor(maxNumber));
};

export default runGame;
