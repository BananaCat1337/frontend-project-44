import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getGcdQuestion from './tools/getGcdQuestion.js';

const logicGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let correct = 0;

  while (correct < 3) {
    const { prompt, correctAnswer } = getGcdQuestion();

    console.log(prompt);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default logicGcd;
