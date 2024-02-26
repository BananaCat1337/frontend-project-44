import getRandomNumber from './logic-numbers.js';

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
};

const getGcdQuestion = () => {
  const number2 = getRandomNumber(50) + 1;
  const number1 = getRandomNumber(50) + 1;
  const correctAnswer = gcd(number1, number2);

  return {
    prompt: `Find the greatest common divisor of given numbers.\nQuestion: ${number1} ${number2}`,
    correctAnswer,
  };
};
export default getGcdQuestion;
