import readlineSync from 'readline-sync';
import name from '../../../bin/brain-games.js';
import CheckingАnswer from './CheckAnswer.js';
import questionGenerator from './questionGenerator.js';

const playRounds = (game) => {
  for (let i = 0; i < 3; i += 1) {
    const correct = questionGenerator(game);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!CheckingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default playRounds;
