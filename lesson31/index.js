//.map() = accepts a callback applies that function
//          to each element fo array, then return to a new array

/*
const numbers = [1,2,3,4,5];
const squeares = numbers.map(squeare); 
const cubes = numbers.map(cube);

console.log(cubes); 

function squeare(element){
    return Math.pow(element,2);
 }
  function cube(element){
    return Math.pow(element,3);
 }
*/
/*
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);

console.log(studentsLower);

function lowerCase(element){
    return element.toLowerCase();
}
function upperCase(element){
    return element.toUpperCase();
}
*/
const dates = ["2024-07-16", "2025-10-10", "2011-09-11"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}