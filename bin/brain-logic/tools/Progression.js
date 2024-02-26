import getRandomNumber from './logic-numbers.js';

const generateProgression = () => {
  const progression = [];
  const firstNumber = getRandomNumber(10);
  const step = getRandomNumber(5) + 1;
  const hiddenIndex = getRandomNumber(10);
  for (let i = 0; i < 10; i += 1) {
    progression.push(i === hiddenIndex ? '..' : firstNumber + step * i);
  }
  return [firstNumber, step, hiddenIndex, progression];
};
export default generateProgression;
