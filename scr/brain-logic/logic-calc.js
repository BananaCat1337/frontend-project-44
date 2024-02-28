import readlineSync from 'readline-sync';
import name from '../../bin/brain-games.js';
import CheckingАnswer from './tools/CheckAnswer.js';
import calculate from './tools/calculate.js';
import randomExpression from './tools/RandomOperator.js';

const logicCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const correct = calculate(expression);
    if (!CheckingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default logicCalc;
