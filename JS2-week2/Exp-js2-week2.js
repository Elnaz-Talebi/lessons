// // lets first create an array of three cars

// const cars = [
//     {
//         make: 'Volvo',
//         speed: 45,
//         color: 'lightYellow',
//     },
//     {
//         make: 'BMW',
//         speed: 87,
//         color: 'lightBlue',
//     },
//     {
//         make: 'Fiat',
//         speed: 78,
//         color: 'lightCyan',
//     }
// ];


// const colors = [];
// for (let i=0; i<cars.length; i++){
//     colors.push(cars[i].color);
// }
// console.log(colors);

// // lets use the same cars array

// // Lets transfrom it from an array of car objects to an array of car colors
// const carColors = cars.map(function(car) {
//     return car.color;
// });

// console.log(carColors); // ['lightYellow', 'lightBlue', 'lightCyan']

// const carSpeeds = cars.map(function(car) {
//     return car.speed;
// });

// console.log(carSpeeds); // [45, 87, 78]




// // Lets get only cars with a speed larger than 60
// const fastCars = cars.filter(function(car) {
//     // This function is called for every car in the cars array
//     if (car.speed > 60) {
//         // save the car
//         return true;
//     } else if (car.speed <= 60) {
//         // filter out the cars that are slower than 60
//         return false;
//     }
// });

// console.log(fastCars); // logs the BMW and the Fiat

// // // // // // // const celsius = [0, 10, 20, 30];

// // // // // // // const convert= celsius.map(function (temp)
// // // // // // // {
// // // // // // // return temp
    
// // // // // // // }
// // // // // // // )
// celsius = [0, 10, 20, 30];
// const fahrenheit = celsius.map(function(temperature) {
//     return temperature * 1.8 + 32;
// });
// console.log(fahrenheit);
// //use filter function that removes all words shorter than 4 letters from an array.
// words = ["apple", "is", "a", "fruit"];
// const longWords = words.filter(function(word){
// // if (word.length > 4) {                                      I did not understand
// //     return true;
// // }
// // else {
// //     return false;
// // }
// });
// console.log(longWords);
// //implement a forEach function that logs “Hello, <name>!” for each name in an array.
// names = ["Alice", "Bob", "Charlie"];
// names.forEach(function(name)
// {
//     console.log(`Hello, ${name}!`);
// })


// const myFunc = function(name){
//     console.log(`Hello , ${name}! to HYF `)
// }
// ---------------------------------------------------------------------------------------------------------------------------------------
// const mentors = [
//     { "name": "Abed Sujan", "subjects": ['JS', 'HTML', 'CSS', 'NODEJS'], yearOfExperience: 4},
//     { "name": "Ahmed Magdy", "subjects": ['JS', 'Database', 'CSS'], yearOfExperience: 1},
//     { "name": "Alicia Gonzales", "subjects": ['DB', 'HTML', 'NODEJS'], yearOfExperience: 8},
//     { "name": "allan Thraen", "subjects": ['REACT', 'HTML', 'CSS'], yearOfExperience: 3},
//     { "name": "Anders Ravn", "subjects": ['JS', 'HTML', 'NODEJS'], yearOfExperience: 2},
//     { "name": "Daniel Fernandes", "subjects": ['Database', 'HTML', 'CSS'], yearOfExperience: 9}
// ];

// console.log(mentors);

// mentors.forEach(function(mentor) {
//     console.log(mentor);
//     console.log(mentor.name);

//     mentor.subjects.forEach(function(subject) {
//         console.log(subject);
//     });
// });

// function forEachHomemade(array, functionToExecute) {
//     for (let i = 0; i < array.length; i++) {
//         const currentItem = array[i];
//         functionToExecute(currentItem, i);
//     }
// }

// // We are mapping/transforming the mentors array. Same size, different items.
// const mentorNames = mentors.map(function(mentor) {
//     return mentor.name;
// });

// const mentorNamesFormatted = mentors.map(function(mentor) {
//     return 'Mentors name is: ' + mentor.name;
// });

// const mentorSummary = mentors.map(function(mentor) {
//     return `Mentors name is: ${mentor.name}. He has ${mentor.yearsOfExperience} years of experience`;
// });

// // map of hommade

// function mapHomemade(array, functionToExecute) {
//     const mappedArray = [];
//     for (let i = 0; i < array.length; i++) {
//         const currentItem = array[i];
//         const newItem = functionToExecute(currentItem, i);
//         // This is where the magic happens!!!
//         mappedArray.push(newItem);
//     }

//     return mappedArray;
// }

// -----------------------------------------------------------------------------------------------

// function circleArea(radius) {
//     return radius * 2 * Math.pi;
// }

// // Remove the function keyword add in arrow
// const circleArea1 = (radius) => {
//     return radius * 2 * Math.pi;
// }

// // If there is only one parameter, we can remove the paranthesis
// const circleArea2 = radius => {
//     return radius * 2 * Math.pi;
// }

// // If there is only one line in the function we can remove the curly braces and the return statement
// // radius * 2 * Math.pi is AUTOMATICALLY being returned
// const circleArea3 = radius => radius * 2 * Math.pi;


// circleArea()




// ---------------------------------------------------------------------------------------------------
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings 
 * @returns {array} Array containing the listing objects
 */
function generateListings(numberOfListings) {
    const listings = [];

    const listingType = ['House', 'Apartment', 'Shed', 'Dorm', 'Farm'];
    const listingFacilities = ['Parkering', 'Elevator', 'Altan', 'Have', 'Husdyr'];
    
    for (let i = 0; i < numberOfListings; i++) {
        const listing = {};
        const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
        const numberOfFacilities = randomIntFromInterval(1, listingFacilities.length - 1);
        const facilities = [];
        for(let i = 0; i < numberOfFacilities; i++) {
            const randomIndexFacilities = randomIntFromInterval(0, listingFacilities.length - 1);
            const randomFacility = listingFacilities[randomIndexFacilities];
            
            if (!(facilities.includes(randomFacility))) {
                facilities.push(randomFacility);
            }
        }

        listing.type = listingType[randomTypeIndex];
        listing.facilities = facilities;
        listing.price = randomIntFromInterval(1, 10000);
        listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
        listing.size = randomIntFromInterval(12, 1000);
        listing.img = `https://loremflickr.com/200/200/${listing.type}`

        listings.push(listing);
    }

    return listings;
}

const result = generateListings(3);
console.log(result);
result.forEach((listing) => console.log(listing.size));

result.forEach((listing) => console.log(listing.price));

generateListings()


// ************************************************************Hajar

// **
/**
 * Get random integer between two numbers, found here: https://stackoverflow.com/a/7228322
 * @param {integer} min - The min number
 * @param {integer} max - The max number
 * @returns {Number} Random number between min and max
 */
const randomIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Get an array with listing objects with random color and speed
 * @param {integer} numberOfListings - The number of listings
 * @returns {array} Array containing the listing objects
 */
const generateListings = (numberOfListings) => {
  const listings = [];

  const listingType = ["House", "Apartment", "Shed", "Dorm", "Farm"];
  const listingFacilities = [
    "Parkering",
    "Elevator",
    "Altan",
    "Have",
    "Husdyr",
  ];

  for (let i = 0; i < numberOfListings; i++) {
    const listing = {};
    const randomTypeIndex = randomIntFromInterval(0, listingType.length - 1);
    const numberOfFacilities = randomIntFromInterval(
      1,
      listingFacilities.length - 1
    );
    const facilities = [];
    for (let i = 0; i < numberOfFacilities; i++) {
      const randomIndexFacilities = randomIntFromInterval(
        0,
        listingFacilities.length - 1
      );
      const randomFacility = listingFacilities[randomIndexFacilities];

      if (!facilities.includes(randomFacility)) {
        facilities.push(randomFacility);
      }
    }

    listing.type = listingType[randomTypeIndex];
    listing.facilities = facilities;
    listing.price = randomIntFromInterval(1, 10000);
    listing.hasGarden = Boolean(randomIntFromInterval(0, 1));
    listing.size = randomIntFromInterval(12, 1000);
    listing.img = `https://loremflickr.com/200/200/${listing.type}`;

    listings.push(listing);
  }

  return listings;
};

const listings = generateListings(5);

console.log(listings);
const jarray = [];
listings.forEach((listing) => {
  console.log(listing.size);
  jarray.push(listing.size);
});
console.log(jarray);
const createNewArray = listings.map((listings) => {
  return listings.price;
});
console.log(createNewArray);

const filterArray = listings.filter((listings) => {
  const cheap = 5000;
  if (listings.price < cheap) {
    return listings.price;
  }
});
console.log(filterArray);

const filtArray = listings
  .filter((listings) => {
    const expensive = 5000;
    if (listings.price > expensive) {
      return listings.price;
    }
  })
  .map((listings) => {
    return listings.price;
  });
console.log(filtArray);

listings.filter((listings) => {
  if (listings.hasGarden === true) {
    return listings.hasGarden;
  }
});