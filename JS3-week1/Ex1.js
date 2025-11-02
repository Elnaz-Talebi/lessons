

// const order1 =[
//    {"order": "chicken",
//     "order-id": 1,
//     "price": 200,
//     "drinks": ["coca", "water", "cocktail"],
//     "extra": ["cheese", "lettuce"]},
//     {"order": "chicken",
//     "order-id": 2,
//     "price": 200,
//     "drinks": ["coca", "water", "cocktail"],
//     "extra": [ {"name": "lettuce",
//         "price": 10,
//         "ready": true
//     },
//     {"name": "bread",
//         "price": 10,
//         "ready": true
//     }]
   
// }
// ] 

// const parsedJavascriptObject = JSON.parse(order1);
// console.log(parsedJavascriptObject);
// console.log(JSON.stringify(order1));
// console.log(JSON.stringify(order1[0]));





fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
    });