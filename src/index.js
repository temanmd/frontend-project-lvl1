import readlineSync from 'readline-sync';

const showErrorText = (answer, name, correctAnswer) => {
  const result = `"${answer}" is wrong answer ;(. `
                 + `Correct answer was "${correctAnswer}".\n`
                 + `Let's try again, ${name}!`;

  console.log(result);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const runGame = (
  noticeText,
  generateQuestionData,
) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(noticeText);

  for (let i = 0; i < 3; i += 1) {
    const data = generateQuestionData();
    console.log(`Question: ${data.question}`);
    const answer = getAnswer();
    const { correctAnswer } = data;
    const isCorrectAnswer = answer === correctAnswer;
    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      showErrorText(answer, name, correctAnswer);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
