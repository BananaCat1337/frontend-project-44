import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

function checkAnswer(number, isEven) {
  const correctAnswer = isEven ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`${answer} is the wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log('Let\'s try again!');
  return false;
}

const logicEven = () => {
  console.log("Answer 'yes' if the number is even, otherwise answer 'no'.");
  let correct = 0;
  while (correct < 3) {
    const number = getRandomNumber(10);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    if (checkAnswer(number, isEven, name)) {
      correct += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicEven;
