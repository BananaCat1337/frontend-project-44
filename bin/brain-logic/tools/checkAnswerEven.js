import readlineSync from 'readline-sync';
import name from '../../brain-games.js';

const checkAnswerEven = (number, isEven) => {
  const correctAnswer = isEven ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`"${answer}" is the wrong answer ;(. Correct answer was "${correctAnswer}".`);
  console.log(`Let's try again, ${name}!`);
  return false;
};
export default checkAnswerEven;
