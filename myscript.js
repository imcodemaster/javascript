//check if a number is divisible by 7 or not
let num = prompt ("enter the number : ");
// let num = 81;
if (num%7==0){
    console.log("num is divisible by seven")
}else{
    console.log("num is not divisible by seven")
};



//largest of three numbers
let num = prompt ("enter the number : ");
let num1 = prompt ("enter the number : ");
let num2 = prompt ("enter the number : ");
if (num>num1 && num>num2){
    console.log("num is greatest")
}
else if (num1>num && num1>num2){
    console.log("num1 is greatest")
}else
{
    console.log("num2 is greatest")
}


//check if a number is even or odd

let num = prompt ("enter the number : ");
if (num%2==0){
    console.log("num is even")
}
else{
    console.log("num is odd")
}   


//check if a year is leap year or not

let year = prompt ("enter the year : ");
if (year%4==0){
    console.log("leap year")
}
else{
    console.log("not a leap year")
}       



// check if number is divisble by 3

let num = prompt ("enter the number:");
if (num % 3 == 0){
    console.log("divisible by 3")}
    else {
        console.log("not divisible by 3 ")
    };