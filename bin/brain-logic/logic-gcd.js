import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const logicGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let correct = 0;

  while (correct < 3) {
    const number2 = getRandomNumber(50) + 1;
    const number1 = getRandomNumber(50) + 1;
    const correctAnswer = gcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const answer = readlineSync.question('Your answer: ');

    if (Number(answer) === correctAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default logicGcd;