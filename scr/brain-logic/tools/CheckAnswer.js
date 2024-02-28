import name from '../../../bin/brain-games.js';

const CheckingАnswer = (userAnswer, correct) => {
  const numAnswer = +userAnswer;
  if (numAnswer === correct || userAnswer.toString() === correct) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default CheckingАnswer;
