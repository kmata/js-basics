 //First Javascript code
 console.log('Hello World');

// let name = 'Karla'; 
 //console.log(name);

// Rules for variables
// Cannot be a reserved keyword 
// Should be meaningful 
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive


//Constans 
const interestRate = 0.3;
console.log (interestRate);


// Values types 
//let name = 'Karla'; //String
//let age = 31; //Number Literal
let isApproved = true; //Boolean Literal 
let firstName = undefined;
let lastName = null;

//Objects 
let person = {
    name:'Karla',
    age: 31
}

//Dot Notation - Change the value 
person.name = 'Vanne';

//Bracket Notation
person['name'] = 'Fede';

console.log(person);
console.log(person.name);


//Array 
let selectedColors = ['red','blue'];
//All Colors
console.log(selectedColors)
//A Position
console.log(selectedColors[0]);


//Add element to the array - Dynamic 
selectedColors[2] = 'Green'
console.log(selectedColors);

selectedColors[3]= 1;
console.log(selectedColors);
console.log(selectedColors[3]);

//Numbers of elements in the array
console.log(selectedColors.length);


//Function

function greet() {
console.log('Hello World');
}

greet();


//Inputs on the function 

function greetA(name, lastName) {
    console.log('Hello ' + name +' '+ lastName);
    }
    
    greetA('John', 'Maru');

//Types of Function 
function square(number){
    return number*number;
}

console.log(square(2));

//SUM

function sumA(numberA, numberB){
    result =  numberA + numberB;
    console.log('This is your result = ' + result)
}

sumA(3,5);