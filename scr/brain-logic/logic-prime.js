import readlineSync from 'readline-sync';
import name from '../../bin/brain-games.js';
import isPrime from './tools/isPrime.js';
import CheckingАnswer from './tools/CheckAnswer.js';
import generateRandomNumber from './tools/randomNumberGeneration.js';

const logicPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(20);
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
    if (!CheckingАnswer(userAnswer, correctAnswer)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicPrime;
