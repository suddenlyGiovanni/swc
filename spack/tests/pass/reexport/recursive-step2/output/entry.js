console.log('b');
const d = 1;
const d1 = d;
console.log('d');
console.log('c');
const c = d1;
const b2 = c;
const __default = b2;
const __default1 = __default;
const b1 = __default1;
console.log('a.js');
export { b1 as b };
console.log('entry');
