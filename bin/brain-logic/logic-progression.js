import readlineSync from 'readline-sync';
import name from '../brain-games.js';

const logicProgression = () => {
  let correct = 0;
  while (correct < 3) {
    const progression = [];
    const firstNumber = Math.floor(Math.random() * 10);
    const step = Math.floor(Math.random() * 5) + 1;
    const hiddenIndex = Math.floor(Math.random() * 10);
    for (let i = 0; i < 10; i += 1) {
      progression.push(i === hiddenIndex ? '..' : firstNumber + step * i);
    }

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
