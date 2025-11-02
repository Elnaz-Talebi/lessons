// const candidate = 120000;
// const newminsalary = candidate - 10 * 120000 / 100;
// console.log(`${newminsalary}`)
// --------------------------------------------------------------
// function nameCorrector(name) {
//   const letter = name.substr(name.length-2);
//   console.log("last:", letter);
// }
// nameCorrector("Elnaz");
// nameCorrector("Bahador");
// nameCorrector("h");
// -------------------------------------------------
// let array = [
//   ["white", "goodness"],
//   ["blue", "tranquility"],
//   ["red", "energy"]
// ];
// function color(array) {
//   let finalArray = [];
//   for (let i = 0; i < array.length; i++) {
//     const item = array[i];
//     const key = item[0];
//     const value = item[1];
//     const obj = {[key]: value}

//     finalArray.push(obj)

//   }
//   return finalArray
// }
// const result = color(array);
// console.log(JSON.stringify(result))
// --------------------------------------------------

// You have a group chat application, but who is online!?
// You want to show your users which of their friends are online and available to chat!
// Given an input of an array of objects containing usernames, status and time since last activity (in mins),
// create a function to work out who is online, offline and away.
// If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.
// The input data has the following structure:

// const friends = [
//   {
//     username: "David",
//     status: "online",
//     lastActivity: 10,
//   },
//   {
//     username: "Lucy",
//     status: "offline",
//     lastActivity: 22,
//   },
//   {
//     username: "Bob",
//     status: "online",
//     lastActivity: 104,
//   },
// ];

// function whosOnline(friends) {
//   const statusCheck = {};
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].status === "online") {
//       if (friends[i].lastActivity > 10) {
//         statusCheck["away"] = statusCheck["away"] || [];
//         statusCheck["away"].push(friends[i].username);
//       } else {
//         statusCheck["online"] = statusCheck["online"] || [];
//         statusCheck["online"].push(friends[i].username);
//       }
//     }
//     if (friends[i].status === "offline") {
//         statusCheck["offline"] = statusCheck["offline"] || [];
//       statusCheck["offline"].push(friends[i].username);
//     }
//   }
//   return statusCheck;
// }

// const x = whosOnline(friends);
// console.log(JSON.stringify(x));

//-------------------------------------------------------------------------

// const collection = ["ali", "gholi", "moh", "sara"];
// // for(let i=0;i<collection.length;i++){
// //     x(collection[i]);
// // }
// collection.forEach((value)=>{});
// for(let value of collection){

// }

// function x(value,index){
//     console.log(value);
// }

//-------------------------------------------------------------------------

//Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata (but not y).
// The input string will only consist of lower case letters and/or spaces.

// function getCount(str) {
//     let count = 0;
//     const vowels = "aeiou"
//     for (let i = 0; i < str.length; i++){
//       if(vowels.includes(str[i])){
//         count++;
//       }

//     }
//     return count;
//   }

//------------------------------------------------------------------------

// function squareDigits(num){
//     const strNum = num.toString();
//     let square = 0;
//     let strSqur ="";
//     for(let i=0; i <strNum.length; i++){
//         const number = Number.parseInt(strNum[i])
//       square = number*number
//       strSqur += square.toString();

//     }
//     return Number.parseInt(strSqur);
//   }
// const result = squareDigits(2424242)
// console.log(result)

//---------------------------------------------------------------------
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

function highAndLow(numbers) {
  let numArray = numbers.split(" ").map(Number);
  let max = Math.max(...numArray);
  let min = Math.min(...numArray);
  return `${max} ${min}`;
}
