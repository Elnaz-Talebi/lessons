
// const balance = 1000;
function userMessage(balance){

if (balance <= 0){
    return "Please deposit some money";
}
else if (balance>0 && balance<=1000){
    return "Your balance is looking okey";
}
else if (balance>1000 && balance<=3000){
    return "Your balance is looking good";
}
else if (balance>3000 && balance<=10000){
    return "Your balance is looking fantastic";
}
else {
   return "Your balance is looking AMAZING";
}
}
console.log(userMessage(500));