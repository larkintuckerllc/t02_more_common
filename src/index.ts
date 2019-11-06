const anotherFunction = () => console.log('Another funciton.');

const plusOne = (x: number): number => x + 1;

const abs = (x: number): number => {
  if (x >= 0) {
    return x;
  }
  return x * -1;
}

// FUNCTIONS
anotherFunction();
const x = 0;
const y = plusOne(x);
console.log(`The value of y is: ${y}`); // 1
const a = -1;
const b = abs(a);
console.log(`The value of b is: ${b}`); // 1

// COMMENTS
/*
TypeScript supports
multi-line comments.
*/

// IF EXPRESSIONS
const number = 3;
if (number < 5) {
  console.log('condition was true');
} else {
  console.log('condition was false');
}

const number2 = 6;
if (number2 % 4 === 0) {
  console.log('number2 is divisible by 4');
} else if (number2 % 3 === 0) {
  console.log('number2 is divisible by 3');
} else if (number2 % 2 === 0) {
  console.log('number2 is divisible by 2');
}

const condition = true;
const number3 = condition ? 5 : 6;
console.log(`The value of number3 is: ${number3}`);

let counter = 0;
let result: number;
while (true) {
  counter += 1;
  if (counter === 10) {
    result = counter * 2;
    break;
  }
}
console.log(`The result is ${result}`);

let number4 = 3;
while (number4 !== 0) {
  console.log(`${number4}!`);
  number4 -= 1;
}
console.log('LIFTOFF!!!');

const arr = [10, 20, 30, 40, 50];
arr.forEach(element => console.log(`the value is: ${element}`));
