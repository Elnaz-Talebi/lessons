// fetch('https://yesno.wtf/api')
//   .then(res => res.json())
//   .then(data => console.log('Answer:', data.answer))
//   .catch(err => console.error('Error:', err));

// fetch('https://knajskdskj.jasdk')
//   .then(res => res.json())
//   .then(data => console.log(data))
//   .catch(err => console.error('Error:', err.message));

//   fetch("https://yesno.wtf/api").then((data) =>{console.log(data);});

// --------------------------------------------------------------------------------------

//   const myPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('hello');
//     }, 4000);
//   });

//   myPromise.then(message => console.log(message));

//   const myPromiseFail = new Promise((_, reject) => {
//     setTimeout(() => {
//       reject(new Error('Something went wrong!'));
//     }, 4000);
//   });

//   myPromiseFail
//     .then(message => console.log(message))
//     .catch(error => console.error('Error:', error.message));

// -----------------------------------------------------------------------------------------------

// function printHello(){
//     return new Promise((resolve, reject) => {
//         let value = false;      // could be true or false
//         setTimeout(() => {
//             if (value){
//                 resolve("Hello");
//             } else  if (!value){
//                 reject("Goodby");
//             }
//         }, 4000);
//     });
// }
// printHello()
// .then((data) => console.log(data))
// .catch((error) => console.log(error));

// -----------------------------------------------------------------------------------------------

// async function fetchData() {
//     try{
//         let result = fetch("https://yesno.wtf/api")
//         .then((response) => response.json())
//         .then((response) => console.log(response.answer));
//         console.log("Not called until after awaits")
//         console.log("result", result);

//     }
//     catch (error){console.log(error);
//     }

// }
// fetchData();

// ----------------------------------------------------------------------------------------------
// YesNoFail4Seconds should wait 4 seconds before it does one of the following 3 things:
// resolves with a yes
// resolves with a no
// or rejects
// Look into Math.random()

// YesNoFail4Seconds()
//   .then((data) => {
//     console.log(`The answer is ${data}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

//   ----------------------

// function YesNoFail4Seconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomValue = Math.random();

//       if (randomValue < 0.33) {
//         resolve("yes");
//       } else if (randomValue < 0.66) {
//         resolve("no");
//       } else {
//         reject("Something went wrong!");
//       }
//     }, 4000);
//   });
// }

// YesNoFail4Seconds()
//   .then((data) => {
//     console.log(`The answer is ${data}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ---------------------------------------------------------

// async function getYesNo() {
//   try {
//     const result = await YesNoFail4Seconds();
//     console.log(`The answer is ${result}`);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getYesNo();

//   ----------------------------------------------------------------------

async function fetching() {
  try {
    const responseAstro = await fetch("http://api.open-notify.org/astros.json");
    const data = await responseAstro.json();
    console.log(data);
    const responseMovie = await fetch(
      "https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json"
    );
    const movieData = await responseMovie.json();
    console.log(movieData);
  } catch (error) {
    console.error(error);
  }
}

fetching();
// -----------------------------------------------------------------------

// async function fetchAstronautsAndMovies() {
//     try {
//       // Step 1: Create the promises for fetching astronauts and movies
//       const astronautsPromise = fetch('http://api.open-notify.org/astros.json').then(res => res.json());
//       const moviesPromise = fetch('https://yesno.wtf/api').then(res => res.json()); // Replace with a real movie API
  
//       // Step 2: Wait for both promises to resolve using Promise.all with await
//       const [astronautsData, moviesData] = await Promise.all([astronautsPromise, moviesPromise]);
  
//       // Step 3: Log the astronauts and movies
//       console.log('Astronauts:', astronautsData);
//       console.log('Movies:', moviesData);
//     } catch (error) {
//       // Step 4: Handle any errors that occur during the fetch
//       console.error('Error fetching data:', error);
//     }
//   }
  
//   // Call the function
//   fetchAstronautsAndMovies();
  

// ---------------------------------------------------------------------

