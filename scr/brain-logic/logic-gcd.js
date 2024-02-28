import readlineSync from 'readline-sync';
import name from '../../bin/brain-games.js';
import generateRandomNumber from './tools/randomNumberGeneration.js';
import gcd from './tools/gcd.js';
import CheckingАnswer from './tools/CheckAnswer.js';

const logicGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = generateRandomNumber(20);
    const num2 = generateRandomNumber(20);
    const correct = gcd(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!CheckingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicGcd;
