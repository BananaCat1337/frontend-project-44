import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

const monthArray = ['+', '-', '*'];
const logicCalc = () => {
  console.log('What is the result of the expression?');
  let correct = 0;
  while (correct < 3) {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);
    const randomIndex = getRandomNumber(monthArray.length);
    const randomElement = monthArray[randomIndex];
    let result = 0;
    if (randomElement === '+') {
      result = firstNumber + secondNumber;
    } else if (randomElement === '-') {
      result = firstNumber - secondNumber;
    } else if (randomElement === '*') {
      result = firstNumber * secondNumber;
    }
    console.log(`Question: ${firstNumber} ${randomElement} ${secondNumber}`);
    const str = readlineSync.question('Your answer: ');
    if (result === parseInt(str, 10)) {
      console.log('Correct!');
      correct += 1;
    } else if (result !== parseInt(str, 10)) {
      console.log(`'${str}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicCalc;
