#!/usr/bin/env node

import readlineSync from 'readline-sync';
import name from './brain-games.js';

function gcd(a, b) {
  if (b === 0) {
    return a;
  }
  return gcd(b, a % b);
}

const brainGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');

  let correct = 0;

  while (correct < 3) {
    const number1 = Math.floor(Math.random() * 50) + 1;
    const number2 = Math.floor(Math.random() * 50) + 1;
    const correctAnswer = gcd(number1, number2);

    console.log(`Question: ${number1} ${number2}`);
    const zxc = readlineSync.question('Your answer: ');

    if (Number(zxc) === correctAnswer) {
      console.log('Correct!');
      correct += 1;
    } else {
      console.log(`'${zxc}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      correct = 0;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
brainGcd();
