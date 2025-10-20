//ES6 module = an external file that contains reusable code
//              that can be imported to other JS files
//              write a reusbale code for many other apps
//              can contain cllases functions and variables and etc
//              introduced as a part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);
const circumference = getCircumference(10);
const area = getArea(10);
const volume = getVolume(10);
console.log(`${circumference.toFixed(2)}cm`);
console.log(`${area.toFixed(2)}cm^2`);
console.log(`${volume.toFixed(2)}cm^3`);