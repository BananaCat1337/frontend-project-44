import readlineSync from 'readline-sync';
import getRandomNumber from './logic-numbers.js';

const askQuestion = () => {
  const number = getRandomNumber(20);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  return {
    number,
    answer,
  };
};

export default askQuestion;
