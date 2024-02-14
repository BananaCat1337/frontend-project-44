import readlineSync from 'readline-sync';
import name from '../brain-games.js';

const logicEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let correct = 0;
  while (correct < 3) {
    const number = Math.floor(Math.random() * 10);
    const isEven = number % 2 === 0;
    console.log(`Question: ${number}`);
    const str = readlineSync.question('Your answer: ');
    if (isEven && str === 'yes') {
      console.log('Correct!');
      correct += 1;
    } else if (isEven && str !== 'yes') {
      console.log(`'${str}' is wrong answer ;(. Correct answer was'yes''.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } else if (!isEven && str === 'no') {
      console.log('Correct!');
      correct += 1;
    } else if (!isEven && str !== 'no') {
      console.log(`'${str}' is wrong answer ;(. Correct answer was'no''.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  if (correct === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicEven;
