//////////////////PROBLEM 1////////////////////

// Modify the function below to return the first item of the array that is being passed in

function first(arr) {
  return arr[0];
}

//////////////////PROBLEM 2////////////////////

// Modify the function below to return the length of the array that is being passed in

function length(arr) {
  return arr.length;
}

//////////////////PROBLEM 3////////////////////

// Modify the function below to return the last item of the array that is being passed in

function last(arr) {
  return arr[arr.length-1];
}

//////////////////PROBLEM 4////////////////////

// Modify the function below to add the passed in number to the end of the passed in array

function addItem(array, number) {
  array.push(number);
  return array
}

//////////////////PROBLEM 5////////////////////

// Modify the function below to remove the last item of the array being passed in

function removeLast(array) {
  array.pop();
  return array
}

//////////////////PROBLEM 6////////////////////

// Modify the function below to remove the first item of the array being passed in

function removeFirst(array) {
  array.shift();
  return array
}

//////////////////PROBLEM 7////////////////////

// Modify the given for loop to push i into the numbers array. If done correctly numbers should equal: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

function maker() {
  var numbers = []
  for (var i = 0; i <= 25; i++) {
    numbers.push(i);
  }

  return numbers
}

//////////////////PROBLEM 8////////////////////

// Fill the numbers array with numbers 0-31.

function count31() {
  var numbers = []

  for (let i=0; i<=31; i++) {
    numbers.push(i);
  }

  return numbers
}

//////////////////PROBLEM 9////////////////////

// Using the given for loop, fill the newArray with the passed in array's elements in reverse order.
// For example:
// backWards( [0,1,2,3] ); -> [3,2,1,0]
// backWards( [ true, false ] ); -> [ false, true ]
// backWards( [ 'first', 'last' ] ); -> [ 'last', 'first' ]

function backWards(arr) {
  var newArray = []

  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i])
  }

  return newArray
}

//////////////////PROBLEM 10////////////////////

// Modify the function below to search the passed in array for the passed in value. If the array contains the value, return true. Otherwise return false.
// For example:
// findInArray([0,1,2,3], 3); -> true
// findInArray([0,1,2,3], 4); -> false

function findInArray(arr, value) {
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}

//////////////////PROBLEM 11////////////////////

// Modify the given for loop to add ten to each element in the passed in array and then push the sum into the newArr array. You can assume that all items in the array will be numbers.
// For example:
// addTen([10,20,30]); -> [20,30,40]
// addTen([1,2,3,4]); -> [11,12,13,14]

function addTen(arr) {
  var newArr = []

  for (var i = 0; i < arr.length; i++) {
    newArr.push(arr[i]+10);
  }

  return newArr
}

//////////////////PROBLEM 12////////////////////

// Modify the function below to return the firstName property of the person object.  Use dot notation

function personName() {
  var person = {
    firstName: 'sally',
    lastName: 'smith',
    age: 29,
    location: 'Orem, UT',
  }
  return person.firstName;
}

//////////////////PROBLEM 13////////////////////

// Modify the function below to return the location property of the person object.  Use bracket notation

function personLocation() {
  var person = {
    firstname: 'sally',
    lastname: 'smith',
    age: 29,
    location: 'Orem, UT',
  }
  return person['location'];
}

//////////////////PROBLEM 14////////////////////

//Use dot notation to add a new property to the object backpack called frontPocket with the value equal to "compass".

const backpack = {}

backpack.frontPocket = 'compass';

//////////////////PROBLEM 15////////////////////

//Use bracket notation to add a material property to the box object.  Set it's value equal to the string 'cardboard'

const box = {}

box['material'] = 'cardboard';

//////////////////PROBLEM 16////////////////////

//Create a variable called name.  Assign it the value of the firstName property using dot notation.

const person = {}

person['firstName'] = 'sally'

let userFirstName = person.firstName;

//////////////////PROBLEM 17////////////////////

// In the function updateUser, change the user parameter's name to Ryan, change the value of pwHash to superSafe and change the value of username to ryan2020. After you have updated all the values return the object.

// The existing user looks like this:
var someUser = {
  name: 'Sally Rally',
  pwHash: 'U+Ldlngx2BYQk',
  username: 'SallyRally801'
};

function updateUser(user) {
  user.name = 'Ryan';
  user.pwHash = 'superSafe';
  user.username = 'ryan2020'
}

//////////////////PROBLEM 18////////////////////

//Inside the function updateEmail, update the email property of the passed in object to be the value of the parameter str. Return the updated object.

function updateEmail(obj, str) {
  obj.email = str;
  return obj;
}

//////////////////PROBLEM 19////////////////////

// Write a function called isOldEnough that takes a person obj and checks the age property to see if the person is old enough to enter the club.  If they are 21 or older return true else return false.

function isOldEnough (personObj) {
  if (personObj.age >= 21) {
    return true;
  } else return false;
}

//////////////////PROBLEM 20////////////////////

//Create a function called addRole that takes in a user object as the first parameter and a string as the second parameter.  The string will represent the user's new role in the system (i.e. admin, creator, editor, visitor). Create a new property on the user object called "role" and assign the passed in string to it, then return the updated object.

function addRole(userObj, str) {
  userObj.role = str;
  return userObj;
}

///////////////////////////////////////////////////////

/*
* Ternary Operator
* Ternary operators are similar to if-statements. Below is the basic structure of a ternary statement.

! condition ? firstExpression : secondExpression
* If condition evaluates to true, firstExpression is executed. What do you think will happen if condition evaluates to false?

* Our checkAge function accepts one parameter, and declares a variable that will have one of two values depending on that parameter.

! Examine -- don't run -- the code.
* What is the condition being tested in checkAge?
* If this condition evaluates to true, what will happen? If it evaluates to false?
* Determine the value of oldEnough on lines 10-12
* Run the code to see if you're correct
*/
function checkAge(age) {
  var oldEnough = age >= 21 ? 'Yup' : 'Nope'
  // oldEnough can only be one of two values.
  // It can be 'Yup' or 'Nope',
  // and that depends on the result of the 'age >= 21' condition.
  // What will the value of oldEnough be?
  console.log(oldEnough)
}

//////////////////PROBLEM 21////////////////////

// Rewrite the existing if statement as a ternary.

function schoolStatus(status) {
  return (status == 'Good')? 'Wow, great job kiddo!': 'No more video games!';
  // if (status == 'Good') {
  //   return 'Wow, great job kiddo!'
  // } else {
  //   return 'No more video games!'
  // }
}

//////////////////PROBLEM 22////////////////////

// Complete the messageBasedOnAge function by using a ternary statement to return a string based on the age parameter.

// If age is less than 18, return: Not quite old enough, sorry.
// If age is 18, return: Congrats on being an adult!
// If age is greater than 18, return: Somebody is really getting up there, huh?

function messageBasedOnAge(age) {
  return (age < 18) ? 'Not quite old enough, sorry.': (age === 18) ? 'Congrats on being an adult!' : 'Somebody is really getting up there, huh?';
  //code here
}

//////////////////PROBLEM 23////////////////////

// Create a function called outerFn, that takes in a callback as a parameter, and then returns that callback invoked.
// To see it working, invoke outerFn at the bottom, passing in the InnerFn as the callback. You should now see "The innerFn is a callback!" in the console.

// Create function here

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function innerFn() {
  return 'The innerFn is a callback!'
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

// Invoke function here
function outerFn(callback) {
  return callback();
}


//////////////////PROBLEM 24////////////////////

// Create a function called fullName, that takes in three parameters: firstName, lastName, and a callback.
// The fullName function should return the callback, passing in firstName and lastName as parameters.
// To test, invoke fullName with your first name, last name and the welcomeMessage function as arguments.

// Create function fullName here

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function welcomeMessage(first, last) {
  return `Welcome to DevMountain, ${first} ${last}!`
}
// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

// Invoke fullName below
function fullName(firstName, lastName, callback) {
  return callback(firstName, lastName);
}

//////////////////PROBLEM 25////////////////////

// Do not edit the code below.
let age = 'TBD'
// Do not edit the code above.

// Create a function called canDrink that will take in three parameters. The first parameter will be an number representing an age. The second and third parameters will be callbacks. The functions drinkSoda and drinkAlcohol are examples of callbacks that could be passed into your function.

// If the age is below 21, return the invocation of the first callback
// If the age is 21 or greater, return the invocation of the second callback

// ===== DO NOT TOUCH CODE BELOW THIS LINE ===== //
function drinkSoda() {
  return 'Come back when you are legally allowed a drink!'
}

function drinkAlcohol() {
  return 'Drink responsibly!'
}

// ===== DO NOT TOUCH CODE ABOVE THIS LINE ===== //

function canDrink(age, callbackBelow, callbackAbove) {
  return (age < 21)? callbackBelow() : callbackAbove();
}

//////////////////PROBLEM 26////////////////////

// Write two functions, one called add and one called multiply, that each takes in two numbers and returns the appropriate new value.

// Write a function called math that takes in two numbers, and a callback 'operator' as parameters.
// This function should return a operator invoked with the appropriate arguments.

//Code here
function add(num1, num2){
  return num1 + num2;
};
function multiply(num1, num2){
  return num1 * num2;
};

function math(num1, num2, operator) {
  return operator(num1, num2)
}
