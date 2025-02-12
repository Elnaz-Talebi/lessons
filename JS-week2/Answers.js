// // Recap of logical operators (Truthy and Falsy)

// // 0 = false
// // 1 = true
// // true = true
// // false = false
// // null = false
// // NaN = false
// // undefined = false
// // '' = false
// // "" = false
// // `` =  false

// // " " = true
// // -20 = true
// // 20 = true
// // [] = true
// // {} = true
// // Number() = true

// // AND (&&) OR (||)

// // true && true = true
// // true && false = false
// // false && true = false
// // false && false = false

// // true || true = true
// // true || false = true
// // false || true = true
// // false || false = false


// // typeof always returns the data type in a string.


// const age = 19;
// const minAge = 18;

// function isUserAllowed(age, minAge) {
//     if (age < minAge) {
//         return `You need to be more than ${minAge}`;
//     }
    
//     return `You are allowed because you at least ${minAge}`;
// }

// document.querySelector('h1').innerHTML = isUserAllowed(age, minAge);

// const ages = [];

// const temperature = -5;

// if (temperature >= 25) {
//     console.log('It is HOT!');
// } else if (temperature < 25 && temperature > 10) {
//     console.log('It is fresh');
// } else {
//     console.log('It is very cold!');
// }

// const isCold = true;
// const isSunny = true;

// if (!isCold && !isSunny) {
//     console.log('This is bad');
// } else {
//     console.log('Wear jacket');
// }

/**
 * @param {string} cpr 
 */
const getGenderByCpr = (cpr) => {
    const lastDigit = cpr.slice(-1);
    let gender = 'male';

    if (parseInt(lastDigit) % 2 === 0) {
        gender = 'female';
    }

    return gender;
}

console.log(getGenderByCpr('010100-1233'));

/**
 * 
 * @param {number} balance 
 */
function getUserAccountMessage(balance) {
    if (balance <= 0) {
        return 'Please deposit some money!'
    } else if (balance > 0 && balance <= 1000) {
        return 'Your balance is looking okay'
    } else if (balance > 1000 && balance <= 3000) {
        return 'Your balance is looking good'
    } else if (balance > 3000 && balance <= 10000) {
        return 'Your balance is fantastic'
    } else {
        return 'Your balance is AMAZING!'
    }
}

console.log(getUserAccountMessage(-20));


// FIND THE BIGGEST NUMBER IN AN ARRAY

/**
 * 
 * @param {array<number>} numbers 
 */
function biggestNumber(numbers) {
    let biggest = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];

        if (number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}

Array.prototype.max = function() {
    let biggest = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < this.length; index++) {
        const number = this[index];

        if (number > biggest) {
            biggest = number;
        }
    }

    return biggest;
}

let person = {
    name: 'Ramiro',
    lastName: 'Estrella',
    fullName: function () {
        return `${this.name} ${this.lastName}`
    }
}

console.log(person.fullName());

const numbersArray = [1, 20, 20, -20, 0, 900];

console.log(numbersArray.max());

console.log(biggestNumber([1, 50, -2, 100, 10000000]));
console.log(smallestNumber([1, 50, -2, 100, 10000000]));

/**
 * 
 * @param {array<number>} numbers 
 */
function smallestNumber(numbers) {
    let smallest = Number.POSITIVE_INFINITY

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];
        if (number < smallest) {
            smallest = number;
        }
    }

    return smallest;
}


const personObj = {
    name: 'Ramiro',
    lastName: 'Estrella',
    birthYear: 1994, 
    age: function () {
        return new Date().getFullYear() - this.birthYear
    },
    gender: 'Female',
    sayHello: function () {
        return this.gender === 'Male' 
            ? `Hello Mr ${this.name} ${this.lastName}`
            : `Hello Miss ${this.name} ${this.lastName}`
    },
    nameReverse: function() {
        let reverseName = '';
        for (let index = this.name.length - 1; index >= 0; index--) {
            const char = this.name[index];
            reverseName += char;
        }
        return reverseName;
    }
}

console.log(personObj.nameReverse());


const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 20 },
    { name: "David", age: 23 },
    { name: "Eva", age: 22 },
    { name: "Frank", age: 20 },
    { name: "Grace", age: 21 },
    { name: "Hannah", age: 21 },
    { name: "Ivy", age: 22 },
    { name: "Jack", age: 20 }
];

function getStudentsByAge() {
    const studentsAge = {};
    for (let index = 0; index < students.length; index++) {
        const student = students[index];

        if (!studentsAge[student.age]) {
            studentsAge[student.age] = [student.name]
        } else {
            studentsAge[student.age].push(student.name)
        }
    }

    return studentsAge;
}

console.log(getStudentsByAge());


// <---------- FUNCTIONS ---------->

// There are two sides to using function, using a function (calling a function) and creating a function.

// How to use (call) a function. Math random

// Explain difference between arguments and parameters

// How to call a function with arguments


// How to create a function in Javascript

// Create a function that accepts two paramters (name, lastName) and console log "Hello name lastName"

// Create a function to sum to values

// Create a function to multiply to values

//Sometimes we want to get a value back when calling a function.
// Fx in the sum example. We want to call the function and get the sum back!

/*
A parameter is the name you want to give to the variable that is available inside of the function.
An argument is the actual value you want to assign to the parameters when you call the function.
*/

// Prameters acts as a placeholder for the arguments. The value of the parameter 
// will get substituted with the value of the argument.


// Calling a function on something
// In JavaScript, you can call functions on something. 
// By this, we mean that you use the dot to call the function. 
// For instance, when we say "call method trim on string"