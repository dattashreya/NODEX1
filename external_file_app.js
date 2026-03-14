var calc = require('./calc'); // Import the local 'calc.js' file
AddResult = calc.addition(10, 5);
SubResult = calc.subtraction(10, 5);
MulResult = calc.multiplication(10, 5);
DivResult = calc.division(10, 5);
console.log(`The sum of 10 and 5 is: ${AddResult}`);
console.log(`The difference of 10 and 5 is: ${SubResult}`);
console.log(`The product of 10 and 5 is: ${MulResult}`);
console.log(`The quotient of 10 and 5 is: ${DivResult}`);
