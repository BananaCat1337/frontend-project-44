import name from '../brain-games.js';
import getRandomNumber from './tools/logic-numbers.js';
import checkAnswerEven from './tools/checkAnswerEven.js';

const logicEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = getRandomNumber(10);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    if (checkAnswerEven(number, isEven, name)) {
      correct += 1;
    } else {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicEven;
