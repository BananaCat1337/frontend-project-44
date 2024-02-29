import generateRandomNumber from './randomNumberGeneration.js';

const randomExpression = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(generateRandomNumber(operators.length))];
  const num1 = generateRandomNumber(5);
  const num2 = generateRandomNumber(5);
  return `${num1} ${operator} ${num2}`;
};

export default randomExpression;
