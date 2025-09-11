/*---------------------------------------------------------------
                  60 Days of Coding Challenge
                    Author: Pranto Bapary
                  Day 8 - JavaScript Basics
---------------------------------------------------------------*/

// JavaScript Basics

// 1.Hello World - Console.log() is used to print anything inside a JavaScript console.
console.log("Hello World!");


// 2. Comments: JavaScript supports two types of comments: 1. Single Line and 2. Multiline

// Here is the syntax for single line comments

/* 
    It is the syntax for 
    multiline comment 
*/

// 3. Variables: Var, Let, Const

// Var is function scoped that means it can be accessible within anywhere in the function

function myID() {
    if (true) {
        var id = 100
        id = 9857 //values can be changed.
    }
    console.log('ID: ', id) //can be accessible
}
myID()

// Let is block scoped that means it can be accessible within the blocks it is declared/initialized.

function myName() {
    if (true) {
        let name = 'Pranto'
        name = 'Pranto Bapary' //values can be changed
        console.log('Name: ', name) //block scoped so it can be accessible here
    }
    //it can't be accessible here because it is not function scoped
}

myName()

// Const is also block scoped but here values cannot be changed

function isStudent() {
    if (true) {
        const student = 'yes'
        // can not change the value of student
        console.log('Student: ', student) //accessible due to block scope
    }
    //can't accessible here
}

isStudent()


// 4. Operations: Arithmetic, Logical, Relational, Assignment

// 4.1: Arithmetic + - * / %
let num1 = 10;
let num2 = 20;
console.log('Sum: ', num1 + num2, '\nSub: ', num1 - num2, '\nMul: ', num1 * num2, '\nDiv: ', num1 / num2, '\nModulo: ', num1 % num2)

// 4.2: Logical- Logical OR '||', Logical AND '&&', Logical Not '!'

// Logical OR returns true if one of the conditions is true
console.log(10 > 20 || 10 > 5) //return true because second condition is true 10>5

// Logical AND returns true if both of the conditions are true
console.log(10 > 20 && 10 > 5) //returns false because first condition is false
console.log(10 > 5 && 10 > 7) //returns true because both conditions are true


// Logical not returns the inverse of the condition
console.log(!(10 > 20)) //10>20 is false but logical not is applied before them so it inverses the condition and make it true.

// 4.3: Relational- Greater than >, Less than <, equal to ==, Greater than or equal to >=, Less than or equal to <=
let n1 = 6
let n2 = 5

console.log(n1 > n2) //returns true because n1 is greater than n2
console.log(n1 < n2) //returns false because n1 is greater than n2

n1 = 5 // now value of n1 is 5 again
console.log(n1 >= n2) //returns true because n1 is not greater than n2 but equal to n2 - satisfy at least one condition
console.log(n1 <= n2) //returns true because n1 is not less than n2 but equal to n2 - satisfy at least one condition
console.log(n1 == n2) //returns true because n1 is equals to n2



// 5. Conditionals: if, if else, else if and switch case

// 5.1: if

let a = 10;

if (a > 0) {
    //will only executed if the condition is true.
    console.log("I am greater than zero") //it will be printed
}

// 5.2: if else

if (a < 5) {
    // will executed if the condition is true otherwise it will execute the else part
    console.log('No')
} else {
    // it will be executed as condition is false.
    console.log('Yes')
}

// 5.3: else if

if (a < 5) {
    // will executed if the current condition is true otherwise it will execute the else if part
    console.log('No')
}
else if (a == 10) {
    // will executed if the current is true otherwise it will execute the else part
    console.log('Yes') //will print yes.
}
else {
    console.log('No')
}

// 5.4: Switch case

switch (a) {
    case 9:
        console.log("Hello, I am 9")
        break

    case 10:
        console.log("Hello, I am 10") //case 10 will be matched and executed because our variable a=10 
        break //break is used otherwise it will run the below blocks as well.

    case 11:
        console.log("Hello, I am 11")
        break

    case 12:
        console.log("Hello, I am 12")
        break

    default:
        console.log("I will be printed if no cases are matched")
}

// 6. Loops: for loop, while loop and break statement

// 6.1: for loop- it has three parts: 1.initialization, 2.condition, 3.increment

// Loop will be executed untill the condition is true. Here it will run 5 times(from 0 to 4)
for (let i = 0; i < 5; i++) {
    console.log("Hello, I am For Loop: ", i + 1)
}

// 6.2: while loop- it also has three parts: 1.initialization, 2.condition, 3.increment

// initialization
i = 1;

// Condition: Loop body will be executed untill the condition is true.
while (i <= 15) {
    console.log("Hello, I am While Loop: ", i)
    if(i == 10)
        break //break is used to exit from a loop
    i++;//increment
}


// 7. Functions: Normal Functions and Arrow Functions

// 7.1: Normal Functions

// Function prototype
function myFunction(){
    // function body
    console.log("Hello, I am myFunction")
}
myFunction() //function call

// We can pass arguments also
// arguments are passed by user by calling the function and passing the values
// parameters are the copy of the arguments and it is received by the function

function sayMyName(name){
    console.log("My name is: ",name)
}

sayMyName("Pranto Bapary")

// 7.2: Arrow Function - Same as normal function but is simplified

const myBioData = () => {
    console.log("Hello I am inside a Arrow Function and it is cool")
}
myBioData()

// Template literals

let today = "Thursday"
console.log(`Today is ${today}`)