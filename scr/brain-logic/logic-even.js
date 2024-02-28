#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from '../../bin/brain-games.js';
import generateRandomNumber from './tools/randomNumberGeneration.js';
import StrCheckingАnswer from './tools/CheckAnswer.js';
import isEven from './tools/isEven.js';

const logicEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = generateRandomNumber(25);
    const correct = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (!StrCheckingАnswer(userAnswer, correct)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default logicEven;
