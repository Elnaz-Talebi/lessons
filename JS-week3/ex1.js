// let fruits = ["Apple", "Orange", "Plum"];

// function xxx(){
//     // let i=o
//     /// for i i<10
//     /// if i==3 break;
//     /// x=50*i
// }
// alert( fruits[0] ); // Apple
// xxx();
// alert( fruits[1] ); // Orange
// alert( fruits[2] ); // Plum

// function bookPlaneTickets() {
//     // draw
//     console.log("Plane tickets booked");
//     requestVacationDays();
//     // draw
//   }

//   function bookHotel() {
//     console.log("Hotel booked");
//     // draw
//     planItinerary();
//     // draw
//   }

//   function requestVacationDays() {
//     // draw
//     console.log("Vacation days requested");
//     // draw
//   }

//   function planItinerary() {
//     console.log("Itinerary done");
//     // draw
//   }

//   function planTrip() {
//     bookPlaneTickets();
//     // draw
//     bookHotel();
//     // draw
//     console.log("Trip planned");
//   }
//   // draw
//   planTrip();
//   // draw

// const user1 = {
//   username:"Eli",
//   age:38,
//   isMentor: true
// };
// console.log(user1)

// const user2 = {
//   username:"sara",
//   age:30,
//   isMentor: true,
//   "100percent": true,
//   children: ["don","sam", "alex"= {username:"ss",pass:123}]
// };

// console.log(user2)
// console.log(user2["100percent"])

// user2.isCool = true;
// console.log(user2);

// user2.isCool = null;
// console.log(user2);

// delete user2.isCool;
// console.log(user2);

// const isMariaCool = user2.isCool;
// console.log(isMariaCool);  //undefined

// const car ={
//   brand:"Toyota",
//   model: "Corolla",
//   year: 2020,
//   color:"red"
// }
// console.log(car);
// console.log(car.brand);
// console.log(car.year);
// car.color = "Blue";
// console.log(car);
// car.isElectric = false;
// console.log(car);

//  const winners = ["michael", "Brian", "Ana", "Niels", "Ana","Brian",];
//  function countWinner(name) {
//   let count = 0;
//   for (let i=0; i<winners.length; i++){
//     let winner = winners[i];
//     if (winner === name) {
//       count++;
//     }
//   }
// return count;
//  }

//  console.log("Brian", countWinner("Brian"))

//  function histogram (){
//   const histo = {};
//   for (let i = 0; i < winners.length; i++){
//     let winner = winners[i];
//     if (histo[winner] === undefined){
//         histo[winner] = 1
//     }
//     else {
//       histo[winner] += 1;

//     }
//   }
//   return histo;
//  }

//  console.log(histogram());

//  const myArray = [12,40,32,24,36]
//  myArray.push(100);
//  console.log(myArray);
//  myArray.unshift(400);
//  console.log(myArray);
// console.log(myArray.length)
// myArray.pop();
// myArray.shift();
// console.log(myArray);
// console.log(myArray.length)
// for (let i=0; i<myArray.length; i++){
//   console.log(myArray[i])
// }
// for (let number of myArray){
//   console.log(number);
// }
// let stingArray =myArray.toString()
// console.log(stingArray, typeof(stingArray));
// console.log(typeof(myArray));
// console.log(myArray);

// console.log(myArray.includes(40));
// console.log(myArray);

//  const array2 = [1, 5, 6];
//  for (let i=0; i<array2.length; i++){    //these piece of code is same as the next for
//   console.log(array2[i]);
//  };

//  const numbers = [1, 5, 6];
//  for (let number of numbers) {           //these for is similar to the previous for
//   console.log(number);
// }

// function bookPlaneTickets() {
//   console.log("Plane tickets booked");
//   requestVacationDays();
// }

// function planTrip() {
//   bookPlaneTickets();
//   bookHotel();
//   console.log("Trip planned");
// }
// function bookHotel() {
//   console.log("Hotel booked");
//   planItinerary();
// }

// function requestVacationDays() {
//   console.log("Vacation days requested");
// }

// function planItinerary() {
//   console.log("Itinerary done");
// }

// planTrip();

const classRoom = {
  student: [
    { name: "sam", surname: "aj", age: 20, address: "dqt" },
    { name: "sara", surname: "tb", age: 21, address: "dwr" },
    { name: "eli", surname: "ch", age: 20, address: "dll" },
    { name: "kim", surname: "kk", age: 22, address: "drd" },
  ],
  // studentExists: function() {
  //   if (this.name + this.surname)
  // }
};

//Simple challenge - eliminate all bugs from the supplied code so that the code
// runs and outputs the expected value.
// Output should be the length of the longest word, as a number.
//There will only be one 'longest' word.

// function findLongest(str) {

//   var spl = str.split(" ");
//   var longest = 0;

//   for (var i = 0; i < spl.length; i++) {
//     if (spl[i].length > longest) {
//       longest = spl[i].length;
//     }
//     }
//     return longest
// }
