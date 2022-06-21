export function returnHi(name) {
  return `hi!${name} ${last}`;
}

// scope only here
const last = 'li';
const middle = 'dunk';
const first = 'wes';

// named exports
export { last, middle };
export default first;
