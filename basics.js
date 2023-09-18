// Variables
const myVariable = "Jesus";
let myOtherVariable = 777;
var someOtherVariable = true;

// Logging to the Console
console.log(myVariable); // Jesus
console.log(myOtherVariable); // 777

// Data Types
let myString = "I'm a string";
let myNum = 123;
let myBoolean = true;
let myNull = null;
let myUndefined; // let myUndefined = undefined;
let myObject = {
	name: "Jeremy",
	sayHi: () => {
		return myObject.name + " says hi ...";
	},
};
let myArray = [1, "Some Value", true, undefined, [1, 3, 5], { name: "hey" }];

// check data types : typeof
console.log(typeof myString); // string
console.log(typeof myObject); // object
console.log(typeof myNum); // number
console.log(typeof myArray); // object

// Operators
console.log(10 + 5); // 15
console.log(10 - 5); // 5
console.log(10 * 5); // 50
console.log(10 / 5); // 2
console.log(10 ** 5); // 100000
console.log(10 % 5); // 0

// string manipulation

// concatenation
let str1 = "My";
let str2 = " House";
let str3 = str1.concat(str2); // same as str1 + str2; (...+...)

console.log(str3); // My House

let madeUpString1 = "Hello, ";
let madeUpString2 = "John!";
const completeString = madeUpString1 + madeUpString2;

console.log(completeString); // Hello, John!

// length
let str3Len = str3.length;
console.log(str3Len); // 8 (chars long)

// accessing characters
let letterH = str3.charAt(3); // pass the index
let letterO = str3[4]; // pass the index
console.log(letterH, letterO);

// subtrings
const theString = "Jesus Christ";
const subString1 = theString.substring(0, 5); // index 0 - 5 (5 not included) (0 - 4)
const subString2 = theString.substring(6); // starting from the 6th index to the end

console.log(`${subString1} \n${subString2}`);

// .slice() : very similar to .substring()
const slicedString1 = theString.slice(0, 5); // index 0 - 5 (5 not included) (0 - 4)
const slicedString2 = theString.slice(6); // starting from the 6th index to the end
console.log(`${slicedString1} \n${slicedString2}`);

// searching and replacing in strings
// .indexOf()
const coolString = "My Cool String";
const indexForCool = coolString.indexOf("Cool");
console.log(indexForCool);

// .includes()
const containsWordCool = coolString.includes("Cool"); // returns boolean
console.log(containsWordCool); // true

// .replace()
const juiceString = "Juice The Juice";
const appleJuice = juiceString.replace("Juice", "Apple");
const orangeJuice = juiceString.split("Juice").join("Orange"); // (replace all re-occuring words)

console.log(appleJuice);
console.log(orangeJuice);

// Conditional statements
let testVariable = 5;

// if, else if, else
if (testVariable >= 10) {
	console.log("Greater or Equal To 10");
} else if (testVariable === 5) {
	console.log("Equal To 5"); // Equal To 5
} else {
	console.log("Something Else ...");
}

// ternary operator
let myTest = testVariable <= 10 ? 7 : "Hello"; // 7

// switch statement

let myTest2 = "Testing 2";

switch (myTest2) {
	case "Testing 2":
		console.log("First Case ..."); // First Case ...
		break;
	case "Test":
		console.log("Second Case");
		break;
	default:
		console.log("Default Case");
		break;
}

// loops

// for loop
for (let i = 1; i <= 10; i++) {
	console.log("For Loop Number: ", i);
}

// for of loop
let shoppingList = ["Give", "Me", "Jesus"];

for (item of shoppingList) {
	console.log(item);
}

// "Give"
// "Me"
// "Jesus"

// for in loop
for (item in shoppingList) {
	console.log(`${shoppingList[item]} : index is ${item}`);
}

let someObject = {
	name: "Tom",
	age: 40,
	address: {
		city: "Charleston",
		street: "34 Victory St",
	},
};

for (property in someObject) {
	if (property === "address") {
		break;
	} else {
		console.log(`Property Name : ${property}`);
		console.log(`Value: ${someObject[property]}`);
	}
}

// While
let someCount = 1;

while (someCount < 5) {
	someCount++;
}

console.log(someCount); // 5

// Do While
let otherCount = 10;

do {
	console.log(`Our var is now: ${otherCount}`);
	otherCount--;
} while (otherCount != 0);

// Functions

// types of functions

// named function || function statement
function greet(name) {
	return `Hello ${name}`;
}

// anonymous function
const hi = function () {
	console.log("Hi");
};

hi();

// arrow function
const add2Numbers = (a, b) => a + b;

// constructor function
function Car(year, make, model) {
	this.year = year;
	this.make = make;
	this.model = model;
	this.describe = () => {
		return `This particular ${make} ${model} was created for the year ${year}.`;
	};
}

Car.prototype.getDateDifference = function () {
	const date = new Date();
	const currentYear = date.getFullYear();

	return `The ${this.make} is ${currentYear - this.year} years old.`;
};

const honda = new Car("2016", "Honda", "Civic");
console.log(honda.describe());

const bugatti = new Car("2022", "Bugatti", "Chiron");
console.log(bugatti.getDateDifference());

// IIFE function
(function () {
	for (let i = 1; i <= 3; i++) {
		console.log(i);
	}
})();

// callback function
// Callback function without arguments

// 1st callback : no arguments
// Function that takes a callback
function greet(callback) {
	console.log("Preparing to greet...");
	callback(); // Execute the callback
}

function sayHello() {
	console.log("Hello, world!");
}

greet(sayHello);

// 2nd callback : with arguments

// Function that takes a callback with arguments
function mathOperation(x, y, callback) {
	console.log("Performing a math operation...");
	const result = callback(x, y); // Execute the callback with arguments
	console.log("Result:", result);
}

function calculate(a, b) {
	return a + b;
}

// Using the mathOperation function with the calculate callback
mathOperation(5, 3, calculate);

// 3rd callback : with an anonymous function
function retrieveFromObject(obj, callback) {
	setTimeout(function () {
		console.log("performing async tasks...");
	}, 2000);

	callback(obj);
}

const myObj = {
	God: "Jesus",
	color: "green",
	sport: "Basketball",
};

retrieveFromObject(myObj, function (obj) {
	if (Object.keys(obj).length > 0) {
		for (const key in obj) {
			let firstKey = key;
			let firstValue = obj[key];

			console.log(`Your key: ${firstKey} \nYour value: ${firstValue}`);
			break;
		}
	} else {
		console.log("Your object could be empty or not an object...");
	}
});

// generator function

// 1st example
function* generatorExample() {
	yield "Hello"; // First pause point
	yield "World"; // Second pause point
	yield "!"; // Third pause point
}

const iterator = generatorExample();

console.log(iterator.next().value); // Output: 'Hello'
console.log(iterator.next().value); // Output: 'World'
console.log(iterator.next().value); // Output: '!'
console.log(iterator.next().value); // Output: undefined

// 2nd example
function* lazySquareCalculator(numbers) {
	for (const number of numbers) {
		yield number * number; // Calculate and yield the square of each number
	}
}

// Create a large array of numbers (simulated for demonstration)
const numbersArray = Array.from({ length: 100000 }, (_, index) => index + 1);

// Use the generator to lazily calculate squares
const squareGenerator = lazySquareCalculator(numbersArray);

// Process and print the first few squares
for (let i = 0; i < 5; i++) {
	const result = squareGenerator.next();
	if (result.done) {
		console.log("No more data to process.");
		break;
	}
	console.log(result.value);
}

// Higher Order Functions (HOF)
const mainUsers = [
	{
		name: "John Kows",
		age: 25,
		email: "johnKows@gmail.com",
		isLoggedIn: true,
	},
	{
		name: "Matt Parson",
		age: 63,
		email: "matty_boy345@gmail.com",
		isLoggedIn: false,
	},
	{
		name: "Unc Sheppard",
		age: 48,
		email: "you_know_hot_fire123@gmail.com",
		isLoggedIn: true,
	},
];

// map
const names = mainUsers.map((user) => {
	return user.name;
});

const agesMinus10 = mainUsers.map((user) => {
	return user.age - 10;
});

console.log(names);
console.log(agesMinus10);

// filter
const usersLoggedIn = mainUsers.filter((user) => {
	return user.isLoggedIn; // if .isLoggedIn = true
});

console.log(usersLoggedIn);

// reduce
const totalAges = mainUsers.reduce((acc, user) => {
	return acc + user.age;
}, 0);

console.log(`Total Ages Added Up: ${totalAges}`);

// chaining methods together
const nameOfUsersLoggedIn = mainUsers
	.filter((user) => user.isLoggedIn)
	.map((user) => user.name);

console.log(nameOfUsersLoggedIn);

// returning a function from a function

// 1st example
function everyOtherLetter(str) {
	let tempArray = [];
	for (let letter of str) {
		tempArray.push(letter);
	}

	let finalArray = [];
	for (let i in tempArray) {
		console.log(i);

		if (i % 2 === 0) {
			finalArray.push(tempArray[i]);
		}
	}

	function formatArray(array) {
		return array.join("").trim();
	}

	const capLetters = (str) => {
		let result = "";
		for (let i = 0; i < str.length; i++) {
			if (i % 2 === 0) {
				result += str[i].toUpperCase();
			} else {
				result += str[i];
			}
		}

		return result;
	};

	return capLetters(formatArray(finalArray));
}

console.log(everyOtherLetter("H1e9l9l5o"));

// 2nd example
function multiply(num) {
	return function (secondNum) {
		return num * secondNum;
	};
}

const firstNumBy = multiply(7); // multiply takes in a num parameter
// firstNumBy will take in the secondNum parameter
console.log(firstNumBy(11)); // 77
