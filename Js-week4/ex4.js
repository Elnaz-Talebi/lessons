// const name = "Alice";
// const age = 16;
// const country = "USA";
// let message = "";
// let status = "";

// if (age < 18) {
//     status = "minor";
// } else {
//     status = "adult";
// }

// message = `${name} is a ${status} from ${country}.`;

// console.log(message); // Alice is a minor from USA.

//------------------------------------------------------------------

// const canISee = true;
// let room;
// if (canISee) {
//     room = "This room is not dark";
// }
// else {
//     room = "This room is pitch black";
// }
// console.log(room);

//-----------------------------------------------------------------

// const studentExists = ["Eli", "Bob", "Maks", "Tina" ]
// const team = "team32";
// const member = 12;
// const status = {
//     name: "Eli",
//     surName: "Tal",
//     join: true
// }
// console.log(studentExists, typeof(studentExists), team, typeof(team), member,typeof(member), status, typeof(status))

//condition 1-----------------------------------------------------------------

// const age = 15;
// function userAge(age){
//     if (age>0 && age<=12){
//         return `The user is child.`
//     }
//     else if (age>13 && age<=19){
//         return `The user is teenager.`
//     }
//     else {
//         return `The user is adult.`

//     }
// }
// const user = userAge(age);
// console.log(user)

//loop3-----------------------------------------------------------------
//Print even numbers between 1 and 20 using a for loop.

// const number = 14;
// function evenNumber (number){
//     if (number%2 == 0)
//         return `number is even`
//     else {
//         return `number is odd`
//     }

// };
// const result = evenNumber(number);
// console.log(result);

//Arrays 4-----------------------------------------------------------------
//Write a function that finds the largest number in an array

// let number = [10, 22, 5, 15]
// function largestNumber(number){
//     let large = 0
//     for (let i = 0; i < number.length; i++){
//         if (number[i] >= large ){
//             large = number[i]
//         }
//     }
//     return large

// }
// const result = largestNumber(number);
// console.log(result);

//Object 4-------------------------------------------------------------------------
//Write a function that takes an array of book objects and returns an array of all book titles.

// const book = [
//     {title: "book1", author: "sara", yearPublished: 1980},
//     {title: "book2", author: "sara", yearPublished: 1970},
//     {title: "book3", author: "sara", yearPublished: 1987}
// ]
// function bookKeeper(book){
//     let library = []
//     for (let i= 0; i < book.length; i++){
//          library.push(book[i].title)
//     }
//     return library
// }
// const result = bookKeeper(book);
// console.log(JSON.stringify(result));

//-----------------------------##LEVEL ONE---------------------------------------------------
//--1.1 Implement Student Grades

function createStudent(names, age, grades) {
  let student = {
    name: names,
    age: age,
    grades: grades,
  };
  return student;
}

createStudent("Eli", 30, "A");
createStudent("Bela", 25, "B");
createStudent("Sara", 25, "B");
createStudent("Mark", 25, "B");
const result = createStudent("Eli", 30, "A");

console.log(result);
console.log(result1);
