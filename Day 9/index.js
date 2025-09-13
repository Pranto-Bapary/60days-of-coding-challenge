/*---------------------------------------------------------------
                  60 Days of Coding Challenge
                    Author: Pranto Bapary
              Day 9 - JavaScript Arry & Objects
---------------------------------------------------------------*/

//1. JavaScript Array

// 1.1 Array Methods: push, pop, shift, unshift, reverse

let numbersArray = [10, 20, 30, 40]
console.log("Array section starts from here")
console.log('Original Array: ', numbersArray)

numbersArray.push(50) //adds 50 to the end of the array. output: 10,20,30,40,50
console.log('Pushed 50: ', numbersArray)

numbersArray.pop() //removes the last element from the array. 50
console.log('After Pop: ', numbersArray)

// current output 10,20,30,40

numbersArray.unshift(90) //adds 90 to the start of the array. output 90,10,20,30,40
console.log('Unshift 90: ', numbersArray)

numbersArray.shift() //removes the first element from the array.
console.log('After Shift: ', numbersArray)

numbersArray.reverse() //reverse the array
console.log('After Reverse: ', numbersArray)

// Foreach loop to iterate over arrays
numbersArray.forEach((num) => {
  console.log(num) //iterate over arrays and prints the values one by one
})

// for..of can also be used to iterate over arrays
for (nums of numbersArray) {
  console.log(`Values of the array: ${nums}`)
}

// 2. Objects
console.log("Objects section starts from here.")
const studentInfo = {
  name: "Pranto",
  id: 221123456,
  batch: 221,
  dept: "CSE",
  uni: "Green University of Banagladesh"
}

console.log(`Student name: ${studentInfo.name}`); //dot operator is used to access the members of an object
console.log(`ID: ${studentInfo.id}`);
console.log(`Batch: ${studentInfo["batch"]}`); //we can use [""] to access the memebers also
console.log(`Department: ${studentInfo.dept}`);
console.log(`University: ${studentInfo["uni"]}`);

// 2.1 We can also use a 'for...in' loop to iterate over objects
const developmentTools = {
  frontend: "React",
  backend: "Node, Express",
  database: "MongoDB",
  versionControl: "Git",
  deployment: "Netlify, Render"
}

for (tools in developmentTools) {
  console.log(`Tools for ${tools}: ${developmentTools[tools]}`)
}

// Map, Filter and Reducer Methods 

let originalPrice = [200, 300, 50, 15, 150, 700]
console.log(`Original Price: ${originalPrice}`)

// Filter Method: used to perform an action to original array based on condition and generate a new filtered array
const filteredPrice = originalPrice.filter((price) => (price < 150 && price > 15))
console.log(`Filtered Price: ${filteredPrice}`)

// Map Method: used to perform an action to the original array and generate a new array
const discountedPrice = originalPrice.map((price) => (price * 0.5))
console.log(`50% Discounted Price: ${discountedPrice}`)

// Reducer Method: used to calculate the total value of an array
const totalPrice = originalPrice.reduce((accumulator, currentPrice) => (accumulator += currentPrice), 0)
console.log("Total price: ", totalPrice)

// Practice Problem on Map, Filter and Reduce

// Exercises:For Array

// 1. You have an array of numbers:
const numbers = [1, 2, 3, 4, 5];

//Excercise 1.1. Use map() to create a new array where each number is doubled.
const doubledNumber = numbers.map((num) => (num * 2))
console.log(doubledNumber)

//Excercise 1.2. Use map() to create a new array where each number is squared.
const squaredNumber = numbers.map((num) => (Math.pow(num, 2)))
console.log(squaredNumber)



// 2. You have an array of names:
const names = ["alice", "bob", "charlie"];


// 2.1 Use map() to return the names with the first letter capitalized (Alice, Bob, Charlie).
const capitalizedNames = names.map((name) => (name[0].toUpperCase() + name.slice(1)))
console.log(capitalizedNames)

// 2.2 From this array:
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 2.2.1 Use filter() to return only the even numbers.
const evenNumbers = numArray.filter((num) => (num % 2 == 0))
console.log(evenNumbers)

// 2.2.2 Use filter() to return numbers greater than 5.
const greater = numArray.filter((num) => (num > 5))
console.log(greater)

// 2.2.3 Use filter() to return words with length greater than 5.
const words = ["apple", "banana", "cherry", "date", "fig", "grape"];

const newWords = words.filter((word) => (word.length > 5))
console.log(newWords)

// 3. reduce() Exercises (accumulating values)
const num = [1, 2, 3, 4, 5]

// 3.1 Use reduce() to calculate the sum of all numbers.
const sumOfAll = num.reduce((acc, num) => (acc += num), 0)
console.log(sumOfAll)

// 3.2 Use reduce() to calculate the product of all numbers.
const prodOfAll = num.reduce((acc, num) => (acc *= num), 1)
console.log(prodOfAll)

// 3.3 Use reduce() to count how many times each fruit appears (hint: use an object as the accumulator).
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitAppears = fruits.reduce((acc, fruit) => {
  if (fruit in acc) {
    acc[fruit]++;
  } else {
    acc[fruit] = 1;
  }
  return acc;
}, {})

console.log(fruitAppears)

// 3.4
const numbs = [1, 2, 3, 4, 5, 6]
// Combine these:
// 1.Use filter() to get only the even numbers.
// 2.Then use map() to square each number.
// 3.Finally use reduce() to get the sum of these squares.

const newNumbs = numbs.filter(num => num % 2 == 0).map(num => Math.pow(num, 2)).reduce((acc, num) => (acc += num), 0)
console.log(newNumbs)


// Exercises:For Objects

// 1. Basic Object Practice

const person = {
  name: "Pranto",
  age: 22,
  city: "Dhaka"
}

// Print the person’s name and city.
console.log("Person's Name: ",person.name)
console.log("Person's City: ",person["city"])

// Change the age to 23.
person.age = 23

// Add a new property country: "Bangladesh".
person.country = "Bangladesh"

// Delete the city property.
delete person.city

console.log(person) //shows name,age and country values

// 2. Objects Inside Array
const users = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 25 },
  { id: 3, name: "Charlie", age: 17 },
  { id: 4, name: "David", age: 30 }
]

// Use map() to return an array of just names.
const userNames = users.map((user) => (user.name))
console.log(userNames);

// Use filter() to return only users who are 18 or older.
validUsers = users.filter((user) => (user.age >= 18))
console.log(validUsers)

// Use reduce() to calculate the total age of all users.
const totalAge = users.map(user => user.age).reduce((acc, age) => (acc += age),0)
console.log(totalAge)

// Find the oldest user (hint: use reduce()).
const oldestUser = users.reduce((acc,user) => {
  if(user.age > acc. age ){
    acc = user
  }
  return acc
},users[0])
console.log(oldestUser);

// 3. Combine map + filter + reduce with Objects

const orders = [
  { id: 1, item: "Book", price: 200, quantity: 2 },
  { id: 2, item: "Pen", price: 20, quantity: 10 },
  { id: 3, item: "Bag", price: 1500, quantity: 1 },
  { id: 4, item: "Notebook", price: 100, quantity: 5 }
];

// Use map() to return an array of total price per order (price * quantity).
const totPrice = orders.map((order) => order.price * order.quantity)
console.log(totPrice);


// Use filter() to get only orders where total price is greater than 500.
const greaterOrder = totPrice.filter((price) => price > 500)
console.log(greaterOrder);


// Use reduce() to get the grand total of all orders combined.
const grandTotal = totPrice.reduce((acc,price) => (acc += price),0)
console.log(grandTotal)

// 4. Combine map + filter + reduce with Objects

const library = [
  { title: "Book A", author: "Author 1", year: 2000 },
  { title: "Book B", author: "Author 2", year: 2010 },
  { title: "Book C", author: "Author 1", year: 2005 },
  { title: "Book D", author: "Author 3", year: 2015 }
]

// Get all books written by "Author 1".
const books = library.filter((item) => (item.author == 'Author 1'))
console.log(books)

// Get only the titles of the books.
const title = library.map((item) => (item.title))
console.log(title);

// Count how many books were published after 2005.
const published = library.reduce((acc, item) => {
  if(item.year > 2005){
    acc += 1;
  }
  return acc;
},0)

console.log(published)


