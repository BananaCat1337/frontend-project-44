import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function getGcdQuestion() {
  const number2 = getRandomNumber(50) + 1;
  const number1 = getRandomNumber(50) + 1;
  const correctAnswer = gcd(number1, number2);

  console.log(`Question: ${number1} ${number2}`);
  const answer = readlineSync.question('Your answer: ');

  return { 
    number1, 
    number2, 
    correctAnswer, 
    answer 
  };
}

const logicGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let correct = 0;

  while (correct < 3) {
    const { number1, number2, correctAnswer, answer } = getGcdQuestion();

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
