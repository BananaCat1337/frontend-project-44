import name from '../../brain-games.js';

const printWrongAnswer = (correctAnswer) => {
  console.log(`'no' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${name}!`);
};

export default printWrongAnswer;
