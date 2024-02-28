import readlineSync from 'readline-sync';
import name from '../../bin/brain-games.js';
import randomProgression from './tools/randomProgression.js';
import CheckingАnswer from './tools/CheckAnswer.js';

const logicProgression = () => {
  console.log('What number is missing in the progression?');
  let correctAnswer = 0;
  for (let count = 0; count < 3; count += 1) {
    const { progression, hiddenNumber } = randomProgression();
    console.log('Question:', progression.join(' '));
    const userAnswer = Number(readlineSync.question('Your answer: '));
    if (CheckingАnswer(userAnswer, hiddenNumber)) {
      correctAnswer += 1;
    } else {
      break;
    }
  }
  if (correctAnswer === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default logicProgression;
