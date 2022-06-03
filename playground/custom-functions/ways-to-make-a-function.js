// eslint-disabled

// // function doctorize(firstname) {
// //   return `Dr. ${firstname}`;
// // }
// // console.log(doctorize('1'));
// console.log(doctorize2('1'));

// // function expression
// const doctorize = function (firstname) {
//   return `Dr. ${firstname}`;
// };

// //hoist

// function doctorize2(firstname) {
//   return `Dr. ${firstname}`;
// }

// arrow function
const inchToCM = (inches) => inches * 2.54;
const add = (a, b = 3) => a + b;

// IIFE
// Immediately Invoked Function Expression
(function (age) {
  console.log('running the anon function');
  return `you r cool and age${age}`;
})(10);

// methods, function of object
const leroy = {
  name: 'leroy',
  // method
  sayHi1() {
    console.log(`hey ${this.name}`);
    return 'hey leroy';
  },
  // short hand method.
  sayHi() {
    console.log('hey leroy');
    return 'hey leroy';
  },
};

// callback function
// click callback
const button = document.querySelector('.clickMe ');
// console.log(button);
button.addEventListener('click', leroy.sayHi1);

// time callback
setTimeout(() => {
  console.log('time to eat!');
}, 1000);
