import isPrime from './isPrime.js';

const checkAnswerPrime = (number, answer) => {
  const correctAnswer = isPrime(number) ? 'yes' : 'no';
  return answer === correctAnswer;
};
export default checkAnswerPrime;
