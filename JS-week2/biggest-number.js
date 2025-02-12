
// function biggestNumber(){
//     let biggest = 0;
//     for (let i =0; i < this.length; i++) {
//        const number =this[i];
//        if (number> biggest){
//         biggest = number;
//        }
//     }
//     return biggest;

// }
// console.log(biggestNumber([1,2,3]));

function biggestNumber (numbers){
    let biggest = Number.NEGATIVE_INFINITY;

    for (let index = 0; index < numbers.length; index++) {
        const number = numbers[index];

        if (number > biggest) {
            biggest = number;
        }
    }
    return biggest
}
console.log(biggestNumber([2,4,1]));