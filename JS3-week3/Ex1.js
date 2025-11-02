// class Shop {
// constructor (name, price, inStock=true){
//     this.name = name;
//     this.price = price;
//     this.inStock = inStock
// }
// }

// const shop1 = new Shop ("Lidle", 10 )
// console.log(shop1);
// console.log(shop1.price);
// console.log(shop1.inStock);

// class Student {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//       this.scores = [];
//     }

//     addScore(score) {
//       this.scores.push(score);
//     }

//     getAverage() {
//       if (this.scores.length === 0) {
//           return 0;
//         }
//       const total = this.scores.reduce((sum, score) => sum + score, 0);
//       return total / this.scores.length;
//     }

//     displayInfo(){
//         return this.name;
//       }
//   }

//   const Student1 = new Student("Eli", 40);
//   Student1.addScore("A");
//   console.log(Student1);
//   console.log(Student1.displayInfo());
//   Student1.displayInfo();

//----------------------------------------------------------------

//   class User {
// constructor (firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
// }
// getFullName(){
//     return this.firstName + " " + this.lastName;
// }
// }

// const user1 = new User("Eli", "Tal");
// console.log(user1);
// console.log(user1.firstName);
// console.log(user1.lastName);
// console.log(user1.getFullName());

//----------------------------------------------------------

class Job {
  constructor(id, title, description, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class Education {
  constructor(id, title, school, address, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.address = address;
    this.startDate = startDate;
    this.endDate = endDate;
  }
}

class CV {
  constructor(email) {
    this.jobs = [];
    this.educations = [];
    this.email = email;
  }

  addJob(job) {
    this.jobs.push(job);
  }

  removeJob(job) {
    this.jobs.splice(this.jobs.indexOf(job), 1);
  }

  addEducation(education) {
    this.educations.push(education);
  }

  removeEducation(education) {
    this.educations.splice(this.educations.indexOf(education), 1);
  }
}

// [{id:1,title:m},{id:2,title:n}]

const cv1 = new CV("nel.nazi@gmail.com");
const job1 = new Job(
  1,
  "Teacher",
  "elementary school teacher",
  "02.02.2015",
  "02.02.2019"
);

const job2 = new Job(2, "Manager", "Store manager", "02.02.2015", "02.02.2019");

const education1 = new Education(
  1,
  "Philologic",
  "State school",
  "Random st, 223",
  "01.09.2010",
  "01.05.2014"
);

const education2 = new Education(
  2,
  "Economics",
  "State university",
  "Random st, 226",
  "01.09.2010",
  "01.05.2014"
);

console.log(cv1.jobs);
console.log(cv1.educations);
cv1.addJob(job1);
cv1.addEducation(education1);
cv1.addJob(job2);
cv1.addEducation(education2);
console.log(cv1.jobs);
console.log(cv1.educations);
cv1.removeJob(job2);
cv1.removeEducation(education1);
console.log(cv1.jobs);
console.log(cv1.educations);
