import readlineSync from 'readline-sync';

const roundsCount = 3;

const runGame = (
  gameDescription,
  generateQuestionData,
) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);

  for (let i = 0; i < roundsCount; i += 1) {
    const { question, correctAnswer } = generateQuestionData();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const isCorrectAnswer = answer === correctAnswer;

    if (!isCorrectAnswer) {
      console.log(`"${answer}" is wrong answer ;(. `
                  + `Correct answer was "${correctAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
