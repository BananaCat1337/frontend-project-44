import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import getRandomNumber from './tools/logic-numbers.js';
import generateRandomOperator from './tools/RandomOperator.js';
import calculateExpression from './tools/calculateExpression.js';

const logicCalc = () => {
  console.log('What is the result of the expression?');
  let correct = 0;
  while (correct < 3) {
    const firstNumber = getRandomNumber(10);
    const secondNumber = getRandomNumber(10);
    const operator = generateRandomOperator();

    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = calculateExpression(firstNumber, operator, secondNumber);

    if (Number(userAnswer) === correctAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  }

  if (correct > 2) {
    console.log(`Congratulations, ${name}!`);
  }
};
export default logicCalc;
