import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

const logicEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = getRandomNumber(10);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if (isEven && answer === 'yes') {
      console.log('Correct!');
      correct += 1;
    } else if (isEven && answer !== 'yes') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was'yes''.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else if (!isEven && answer === 'no') {
      console.log('Correct!');
      correct += 1;
    } else if (!isEven && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was'no''.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (correct >= 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicEven;
