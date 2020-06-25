import readlineSync from 'readline-sync';

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
    const answer = readlineSync.question('Your answer: ');
    const { correctAnswer } = data;
    const isCorrectAnswer = answer === correctAnswer;
    if (isCorrectAnswer) {
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. `
                  + `Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
