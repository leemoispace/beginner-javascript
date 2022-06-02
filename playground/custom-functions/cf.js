const bill = 100;
const taxRate = 0.13;

function calculateBill2(billAmount, taxRate) {
  // console.log('running calculate bill!');
  const total = bill * (1 + taxRate);
  return total;
}

console.log(`your total bill is ${calculateBill2(100, 0.13)}`);

// parameter can be expressions

// nesting of functions
function doctorize(name) {
  return `Dr ${name}`;
}

function yell(name = 'SB') {
  return `HEY ${name.toUpperCase()}`;
}
