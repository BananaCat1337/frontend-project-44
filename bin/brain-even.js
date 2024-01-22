import readlineSync from 'readline-sync';

import { name } from './brain-games.js';

console.log('Answer "yes" if the number is even, otherwise answer "no".');
const brainEven = () => {
  let correct = 0;
  while (correct < 3) {
    const number = Math.floor(Math.random() * 100);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    const str = readlineSync.question('Your answer: ');
    if (isEven && str === 'yes') {
      console.log('Correct!');
      correct += 1;
    } else if (isEven && str !== 'yes') {
      console.log(`'${str}' is wrong answer ;(. Correct answer was 'yes'.
        Let's try again, ${name}!`);
      correct = 0;
    } else if (!isEven && str === 'no') {
      console.log('Correct!');
      correct += 1;
    } else if (!isEven && str !== 'no') {
      console.log(`'${str}' is wrong answer ;(. Correct answer was 'no'.
        Let's try again, ${name}!`);
      correct = 0;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};
brainEven();
export default brainEven;
