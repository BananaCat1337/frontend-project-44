import name from '../brain-games.js';
import isPrime from './tools/isPrime.js';
import printWrongAnswer from './tools/printWrongAnswer.js';
import askQuestion from './tools/askQuestion.js';
import checkAnswer from './tools/checkAnswerPrime.js';

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
