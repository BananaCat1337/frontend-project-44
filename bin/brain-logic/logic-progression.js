import readlineSync from 'readline-sync';
import name from '../brain-games.js';
import generateProgression from './tools/Progression.js';

const logicProgression = () => {
  let correct = 0;
  while (correct < 3) {
    const [firstNumber, step, hiddenIndex, progression] = generateProgression();
    console.log('What number is missing in the progression?');
    console.log(`Question: ${progression.join(' ')}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === String(firstNumber + step * hiddenIndex)) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${firstNumber + step * hiddenIndex}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicProgression;
