function addition(a,b) {
    return a+b;
}
function subtraction(a,b) {
    return a-b;
}
function multiplication(a,b) {
    return a*b;
}
function division(a,b) {
    if (b === 0) {
        return 'Error: Division by zero is not allowed.';
    }   else {
        return a/b;
    }
}

AddResult = addition(10, 5);
SubResult = subtraction(10, 5);
MulResult = multiplication(10, 5);
DivResult = division(10, 5);

console.log(`The sum of 10 and 5 is: ${AddResult}`);
console.log(`The difference of 10 and 5 is: ${SubResult}`);
console.log(`The product of 10 and 5 is: ${MulResult}`);
console.log(`The quotient of 10 and 5 is: ${DivResult}`);
