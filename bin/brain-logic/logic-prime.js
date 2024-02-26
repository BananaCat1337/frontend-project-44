import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

const isPrime = (number) => {
  if (number < 2) return false;
  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const printWrongAnswer = (number) => {
  console.log(`'no' is wrong answer ;(. Correct answer was '${isPrime(number) ? 'yes' : 'no'}'.`);
  console.log(`Let's try again, ${name}!`);
};

const logicPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = getRandomNumber(20);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    if ((answer === 'yes' && (number === 0 || number === 1)) || (answer === 'no' && (number === 0 || number === 1))) {
      printWrongAnswer(number, name);
      return;
    }

    if ((answer === 'yes' && isPrime(number)) || (answer === 'no' && !isPrime(number))) {
      console.log('Correct!');
      correct += 1;
    } else {
      printWrongAnswer(number, name);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default logicPrime;
