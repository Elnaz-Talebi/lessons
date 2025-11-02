
// function changeText() {
//     let button = document.getElementById("toggleButton");
//     if (button.innerHTML === "0") {
//         button.innerHTML = "1";
//     } else {
//         button.innerHTML="0";}
// }
// setInterval


// const buttonE1 = document.querySelector("#button1")
// const buttonE2 = document.querySelector("#button2")
// const buttonE3 = document.querySelector("#button3")
// const result = document.querySelector(`#result`)

// let counter = 1;
// const counterAction = function(){
//     console.log("button clicked! and counter -"+ counter);
//     result.innerHTML = counter;
//     counter++
// };
// buttonE1.addEventListener('click', counterAction);
// buttonE2.addEventListener('click', counterAction);
// buttonE3.addEventListener('click', ()=>{
//     setTimeout(counterAction, 3000)
// });

// document.addEventListener("DOMContentLoaded", ()=>{
//     counter = 100;
//     console.log("DOM is loaded")
// })

// let position;

// const mouseEvent =(event)=>{
//     position.push({x:event.clientX, y:event.clientY})
//     // console.log(`${event.clientX}, ${event.clientY}`)
// } 

// document.addEventListener("mousemove", mouseEvent)

// // setTimeout(() => {console.log(position)}, 30000);
// setTimeout(()=>{
//     let sumX = 0;
//     let sumY = 0;
//     position.forEach(position=>{
//         sumX = sumX + position.x;
//         sumY = sumY + position.y;
//     })

//     const avgX = sumX/position.length;
//     const avgY = sumY/position.length;
//     console.log(`avgX = ${avgX}, avgY = ${avgY}, count: ${position.length}`)
// })

// setTimeout(calculateAvg, 10000)


let myVar = setInterval(myTimer ,1000);
function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}

function myFunction() {
    alert('Hello');
  }