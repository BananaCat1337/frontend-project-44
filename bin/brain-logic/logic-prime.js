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

const printWrongAnswer = (correctAnswer) => {
  console.log(`'no' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

const askQuestion = () => {
  const number = getRandomNumber(20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  return {
    number,
    answer,
  };
};

const checkAnswer = (number, answer) => {
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return answer === correctAnswer;
};

const logicPrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const { number, answer } = askQuestion();

    if (number < 2 && answer !== 'no') {
      printWrongAnswer('no');
      return;
    }

    if (checkAnswer(number, answer)) {
      console.log('Correct!');
      correct += 1;
    } else {
      printWrongAnswer(isPrime(number) ? 'yes' : 'no');
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default logicPrime;
