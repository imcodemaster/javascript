// You can also use this code to learn about variables, data types, operators, and objects in JavaScript

console.log("Hello World"); // can console (print on cmd, powershell) whatever you give. 

// Addition of Number 
console.log("addition of two number 48 + 57 : " , 48 + 57 ); // 48 + 57 = 105

//console.log( any string statement)
console.log("Js file Runing from Node js runtime env. ")

// variable declaration 

var a = 203;
var b = 134;

let c = "String Value" ;
let d = "Also a string value" ;

const e = 3.4; // constant value - cant be re-initialize.

//  Now print all variable - one by one console.log  

console.log("value of c : " , c ); 
console.log("value of d : " , d ) ;
console.log("value of e : " , e ) ;

// arthematic operation

// operands a and b 
console.log("value of a : " , a ); 
console.log("value of b : " , b ) ;

// operation on operands 

console.log( "Addition : ", a + b);
console.log( "Substraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log( "Division : ", a / b);
console.log( "Modulus : ", a % b);

const words = "THis is a string value in const variable";
console.log('printing const variable - ', words);


console.log(c + d) //concatination of string
console.log(c + " " + d) ; //concatination of string

console.log(c-d);
console.log(c*d);
console.log(c/d);

console.log(d+e);
console.log(d-e);

console.log( "a + b + e : " ,a + b + e) ; // addition of number and constant
console.log("a + b - e : " , a + b - e) ; // here e is constant so it will be added or substracted from a and b
console.log("a + b * e : " , a + b * e) ; // here e is constant so it will be multiplied with a and b
console.log("a + b / e : " , a + b / e) ; // here e is constant so it will be divided with a and b
console.log("a + b + c : " , a + b + c ) ; // here c is string so it will concatinate with a and b



let person = {
    name: "Vinay",
    age: 30,
    city: "Delhi",
    gender: "male"
}

person.name = "Vinay Kumar"; // updating the name property of person object
person.education = "B.Tech"; // adding a new property to the person object
console.log("Person education: ", person.education); // accessing the new property
console.log("Person Object: ", person); // printing the entire person object
console.log("Person Object: ", person.name);

console.log("Person lives in  ", person["city"]); // accessing object property using key
console.log("Hello , I am ", person.name, " and I am ", person.age, " years old. I live in ", person.city)


person1 = {};
person1.name = "Vinay";
person1.age = 30;
person1.city = "Delhi";

console.log(person1.city);
console.log(person1);
person1.age = 34; // updating the age property of person1 object
console.log("Updated age of person1: ", person1.age); // printing the updated age
console.log(person1); // printing the entire person1 object



person2 = new Object(); // creating a new object using the Object constructor
person2.name = "Vinay Kumar";
person2.age = 30;
person2.city = "Delhi";
console.log("Person2 Name: ", person2.name); // accessing the name property of person2 object
console.log("Person2 Age: ", person2.age); // accessing the age property of person2 object
console.log("Person2 City: ", person2.city); // accessing the city property of person2 object


// Example of String Methods
let str = "hello world";
console.log("String Length: ", str.length); // prints the length of the string
console.log("Uppercase: ", str.toUpperCase()); //converts string to uppercase

let str2 = "   Hello World   ";
console.log("lower case :" ,str2.toLowerCase()); // converts string to lowercase
console.log("Trimmed String:" , str2.trim()); // remove whitespaces from both ends

// Array Methods

console.log(arr=["vinay" , "Ram", "Shiv"]);
// console.log(arr);
console.log(" length of an array : " , arr.length);

console.table(arr);

//pushing values 
arr.push("Piyush");
arr.push("Shayam", "Ramesh");

//console push value
console.table("array after pushing value : ", arr);
console.log(" array we have now : ",arr)

console.log("length of an array :", arr.length);

//array we have now 
console.log("array we have :" , arr)

//poping value from array
arr.pop()
console.log("array after poping last value :" , arr);

// unshift value (add in start)
arr.unshift("Ramesh");
console.log( " unshift - adding value in start of array : " , arr);

//shift value (remove from start)
arr.shift();
console.log("array after shift - del and return 1st index" , arr);

// indexOf 

console.log(arr)
console.log("Index of Shayam, Return index position of value" , arr.indexOf("Shayam"));



console.log("End of scripts");
// This is the end of the script
// You can run this script using Node.js by executing the command: node index.js
// This will print the output in the console
// Make sure you have Node.js installed on your system
// You can also use any text editor to write this code and save it as index.js
// After saving the file, you can run it using the command mentioned above
// You can also use any IDE like Visual Studio Code, Sublime Text, etc. to write and run this code
// This code demonstrates the basic features of JavaScript and how to use Node.js to run JavaScript code
// You can modify this code to add more features or functionalities as per your requirements
// You can also use this code as a starting point to learn more about JavaScript and Node.js
// Happy coding!    


