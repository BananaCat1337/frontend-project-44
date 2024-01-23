import readlineSync from 'readline-sync';

import name from './brain-games.js';

console.log('What is the result of the expression?');
const calc = () => {
  let correct = 0;
  const monthArray = ['+', '-', '*'];
  while (correct < 3) {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const randomIndex = Math.floor(Math.random() * monthArray.length);
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
      console.log(`'${str}' is wrong answer ;(. Correct answer was '${result}'.
        Let's try again, ${name}!`);
      correct = 0;
    }
    if (correct === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
calc();
export default calc;
