function changeLogo() {
    let logo = document.getElementById('logo');
    logo.src = "https://assets.fontsinuse.com/static/use-media-items/15/14246/full-2048x768/56fc6e1d/Yahoo_Logo.png?resolution=0";

    logo.style.width = "200px";

  
    let newTitle = document.createElement('h1');
    newTitle.innerHTML = 'My new title'; // <h1>My new title</h1>
  
    document.body.appendChild(newTitle);
  }
  
changeLogo();
  // change the event type
document.querySelector('button').addEventListener('click', function(event) {
    // what does the event do?
    // console.log(event);
    document.body.style.backgroundColor = 'red';
});

const favoriteDishes = [
    "Spaghetti", "Rice", "Sushi", "Beef"
];
const ul = document.createElement("ul");
document.body.appendChild(ul);
for(let i=0; i<favoriteDishes.length; i++){
    const li = document.createElement("li");
    li.innerText = favoriteDishes[i];
    ul.appendChild(li);
}


const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const ul2 = document.createElement("ul");
for(let i=0; i <podcasts.length; i++){
    const h1 = document.createElement("h1");
    h1.innerHTML = podcasts[i].name;

    const li = document.createElement("li");
    li.appendChild(h1);

    if (podcasts[i].imageUrl){
    const img = document.createElement("img");
    img.src = podcasts[i].imageUrl;
    li.appendChild(img)
    }
    ul2.appendChild(li);

};

document.body.appendChild(ul2);






function appendImage(imageUrl, elementToAppendImageTo){
    const img = document.createElement("img")
    img.src=imageUrl;
    elementToAppendImageTo.appendChild(img)

}
 appendImage('https://picsum.photos/536/354', document.getElementById('headder'))


 document.getElementById("btn-hello").addEventListener("click", function(event){
    console.log(event);
    event.target.innerHTML = "Button clicked"
 })