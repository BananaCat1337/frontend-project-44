import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

const logicPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = getRandomNumber(20);
    let result = 0;
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        result += 1;
      }
    }
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && (number === 0 || number === 1)) || (answer === 'no' && (number === 0 || number === 1))) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    if ((answer === 'yes' && result === 2 && number !== 1 && number !== 0) || (answer === 'no' && result > 2)) {
      console.log('Correct!');
      correct += 1;
    } else if ((answer !== 'yes' && result === 2 && number !== 1 && number !== 0) || (answer !== 'no' && result > 2)) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${answer === 'yes' ? 'no' : 'yes'}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicPrime;
