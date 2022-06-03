/*eslint-disable*/

//const { text } = require("stream/consumers");

// // global scope and var
const first = 'wes';
// let second='bos';
// var age1=100;//var window.age  global>window

// //function scope and var, when name duplicate it will shadow the global var.
// const age2=100
// function go(){
//     const age2=200;
//     console.log(age2);
// }

// go()

// block scope in {}s
let cool;
if (1 === 1) {
  cool = true;
}
console.log(cool);

// let and const is block scoped while var is function scoped
for (var i = 0; i < 10; i++) {
  console.log(i);
}

//scoped based on define place, lexical scope.

//function scope
function sayHi(name){
    function yell(){
        console.log(name.toUpperCase())
    }
    yell();
}

sayHi("Leroy")
