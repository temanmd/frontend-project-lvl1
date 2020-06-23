import readlineSync from 'readline-sync';

const runGame = (generateQuestion, checkAnswer, getCorrectAnswer) => {
  const state = {
    correctAnswers: 0,
    isError: false,
  };

  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  do {
    const question = generateQuestion();
    console.log(`Question: ${question.text}`);
    const answer = getAnswer();
    const isCorrectAnswer = checkAnswer(answer, question);
    if (isCorrectAnswer) {
      state.correctAnswers += 1;
      console.log('Correct!');
    } else {
      state.isError = true;
      showErrorText(answer, question, name, getCorrectAnswer);
    }
  } while (needToAskAnotherQuestion(state));

  if (!state.isError) {
    console.log(`Congratulations, ${name}!`);
  }
};

const showErrorText = (answer, question, name, getCorrectAnswer) => {
  let result = `"${answer}" is wrong answer ;(. `;
  result += `Correct answer was "${getCorrectAnswer(question)}".\n`;
  result += `Let's try again, ${name}!`;

  console.log(result);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const needToAskAnotherQuestion = (state) =>
  state.correctAnswers < 3 && !state.isError;

export default runGame;
