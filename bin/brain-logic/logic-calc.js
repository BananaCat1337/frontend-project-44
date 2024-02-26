import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './logic-numbers.js';

const mathArray = ['+', '-', '*'];

const calculateExpression = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;
    case '-':
      return firstNumber - secondNumber;
    case '*':
      return firstNumber * secondNumber;
    default:
      return NaN;
  }
};

const logicCalc = () => {
  console.log('What is the result of the expression?');
  let correct = 0;
  while (correct < 3) {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);
    const randomIndex = getRandomNumber(mathArray.length);
    const randomOperator = mathArray[randomIndex];

    const result = calculateExpression(firstNumber, secondNumber, randomOperator);

    console.log(`Question: ${firstNumber} ${randomOperator} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (result === parseInt(userAnswer, 10)) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicCalc;
