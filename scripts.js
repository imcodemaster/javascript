let num1 = parseInt(prompt("Enter first number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = parseInt(prompt("Enter second number:"));

let res;

switch (operator) {
    case '+':
        res = num1 + num2;
        break;
    case '-':
        res = num1 - num2;
        break;
    case '*':
        res = num1 * num2;
        break;
    case '/':
        res = num1 / num2;
        break;
    default:
        res = "Invalid operator";
}   
    

console.log(res);