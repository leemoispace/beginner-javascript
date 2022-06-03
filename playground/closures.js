// outer();

// const { create } = require('lodash');

// function outer() {
//   const outerVar = 'outer';
//   function inner() {
//     const innerVar = 'inner';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   inner();
// }

// //closure sample
// function outer() {
//   const outerVar = 'outer';
//   function inner() {
//     const innerVar = 'inner';
//     console.log(innerVar);
//     console.log(outerVar);
//   }
//   return inner;
// }

// const innerFn = outer();
// innerFn();

function createGreeting(greeting = '') {
  const myGreet = greeting.toUpperCase();
  return function (name) {
    return `${myGreet} ${name}`;
  };
}

const sayHello = createGreeting('hello');
const sayHey = createGreeting('Hey');

console.log(sayHello('leroy'));
console.log(sayHey('martian'));

// 在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。 简单的说：在一个函数里面嵌套另一个函数，被嵌套的那个函数的作用域是一个闭包。
// 闭包的特性：
// 1.函数内再嵌套函数
// 2.内部函数可以引用外层的参数和变量
// 3.参数和变量不会被垃圾回收机制回收
// 作用：创建私有变量，减少全局变量，防止变量名污染。可以操作外部作用域的变量，变量不会被浏览器回收，保存变量的值。

function createGame(gameName) {
  let score = 0;
  return function win() {
    score++;
    return `your name ${gameName} score is ${score}`;
  };
}

const hockeyGame = createGame('hockey');
const soccerGame = createGame('soccer');
