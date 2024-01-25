#!/usr/bin/env node
import readlineSync from 'readline-sync';
import name from './brain-games.js';

const primeGame = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let corret = 0;
  while (corret < 3) {
    const number = Math.floor(Math.random() * 20);
    let result = 0;
    for (let i = 1; i <= number; i += 1) {
      if (number % i === 0) {
        result += 1;
      }
    }
    console.log(`Question: ${number}`);
    const str = readlineSync.question('Your answer: ');
    if (str === 'yes' && (number === 0 || number === 1)) {
      console.log(`'${str}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      corret = 0;
    } else if (str === 'no' && (number === 0 || number === 1)) {
      console.log('Correct!');
      corret += 1;
    } else if (str === 'yes' && result === 2 && number !== 1 && number !== 0) {
      console.log('Correct!');
      corret += 1;
    } else if (str === 'no' && result > 2) {
      console.log('Correct!');
      corret += 1;
    } else if (str !== 'yes' && result === 2 && number !== 1 && number !== 0) {
      console.log(`'${str}' is wrong answer ;(. Correct answer was 'yes'. Let's try again, ${name}!`);
      corret = 0;
    } else if (str !== 'no' && result > 2) {
      console.log(`'${str}' is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`);
      corret = 0;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
primeGame();
