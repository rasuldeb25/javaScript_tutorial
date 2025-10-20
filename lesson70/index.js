//JSON = (Java Object Notation) data-interchange format
//      Used for exchanging data between a server and a web application
//      JSON files {key:value} OR [value1,value2,value3]

//      JSON.stringfy() = converst a JS object to a JSON string
//      JSON.parse()= converts a JSON string to a JS obeject

/*
const jsonNames = `["Spongebob", "Patric", "Snady"]`;
//const jsonString =JSON.stringify(names);
const jsonPerson =`{"name": "Spongebob","age": 30,"isEmployed": true,"hobbies": ["Jellyfishinng", "Karate", "Cooking"]}`;
const jsonPeople =`[{"name": "Spongebob", "age": 30,"isEmployed": true},
                    {"name": "Patrick", "age": 34,"isEmployed": false},
                    {"name": "Squidward", "age": 50,"isEmployed": true},
                    {"name": "Sandy", "age": 27,"isEmployed": false}]`;
const parseData =JSON.parse(jsonPeople);
console.log(parseData);
*/
fetch("people.json")
        .then(response => response.json())
        .then(values => values.forEach(value => console.log(value.age)))
        .catch(error => console.error(error));