import * as math from 'mathjs/number'

// parse an expression
const node = math.parse('sqrt(x/x+1)');
let str = node.toString();   // returns 'sqrt((x / x) + 1)'
let regx = node.toTex();      // returns '\sqrt{ {\frac{x}{x} }+{1} }'

console.log("String Expression : ", str);
console.log("Regx Expression : ", regx);