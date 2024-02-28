import name from '../../brain-games.js';

const checkingАnswer = (userAnswer, correct) => {
  if (typeof(userAnswer) === "number") {
    if (Number(userAnswer) === correct) {
      console.log('Correct!');
      return true;
    }
    console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correct}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  if ((typeof(userAnswer) === "string")) {
    console.log('Correct!');
    return true;
  }
  console.log(`${userAnswer} is wrong answer ;(. Correct answer was '${correct}'.`);
  console.log(`Let's try again, ${name}!`);
  return false;
};

export default checkingАnswer;
