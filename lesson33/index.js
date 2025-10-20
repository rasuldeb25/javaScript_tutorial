// .reduce() = reduces the elements of an array
//              to a single value

/*
 const prices = [15, 15, 20, 15, 20, 15, 50, 100];
 const total = prices.reduce(sum);

 console.log(`$${total.toFixed(2)}`);
 
 function sum(accumulator, element){
    return accumulator+element;
 }
*/
const grades = [70, 82, 73, 90, 60, 95];

const maximum = grades.reduce(toGetMax);
const minimum = grades.reduce(toGetMin);
console.log(minimum);

function toGetMax(accumulator, element){
    return Math.max(accumulator,element);
}
function toGetMin(accumulator, element){
    return Math.min(accumulator,element);
}