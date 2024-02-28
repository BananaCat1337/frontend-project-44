import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import checkingАnswer from './tools/CheckAnswer.js';
import calculate from './tools/calculate.js';
import randomExpression from './tools/RandomOperator.js';

const logicCalc = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const expression = randomExpression();
    console.log(`Question: ${expression}`);
    const answerUser = readlineSync.question('Your answer: ');
    const correct = calculate(expression);
    if (!checkingАnswer(answerUser, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
export default logicCalc;
