let name = ['bob'];
let copy = [...name];
copy[0] = 'alice';

// console.log([1, 2, 3]);

// console.log(copy);
// console.log(name);

// copying an array using slice()
// const copy = name.slice();

// using spread operator -> ...
// const copy = [...name];

// comparing arrays 
const array1 = ['a', 'b', 3];
const array2 = ['a', 'b', 3];
console.log(array1.join(''));
console.log('jo' === 'jo');
console.log(JSON.stringify(array1) === JSON.stringify(array2));

// const copy = JSON.parse(JSON.stringify(person1))

// “If you do not use Dates, functions, undefined, Infinity, 
// [NaN], RegExps, Maps, Sets,  ImageDatas, 
// sparse Arrays, Typed Arrays or other complex types within your object, 
// a very simple one liner to deep clone an object is: JSON.parse(JSON.stringify(object))”

const person1 = { name: 'joe', email: 'j@gmail.com' };

// person1.age = 34;

const personWithAge = { ...person1, age: 34 };

// delete person1.age;

console.log(personWithAge);
console.log(person1);
