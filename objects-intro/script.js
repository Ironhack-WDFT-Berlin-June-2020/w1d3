

// objects
// objects are an unordered, keyed collection of any various values.

const emptyObj = {};

// property value / key - value
let objStructure = {
    key1: 'value',
    key2: 'value'
}

const student = {
    firstName: 'Rufus',
    age: 31,
    email: 'rufus@gmail.com',
    hobbies: ['chess', 'running'],
    address: {
        street: 'Lobeckstr.',
        zips: [10235, 16738, 27848]
    }
}

// accessing a value
// dot notation

console.log(student.firstName);

// change a value
student.age = 32;
console.log(student.age);

// add a property
student.lastName = 'Smith';
console.log(student);

// another way to access a value
const input = 'firstName';
console.log(student[input]);

// properties can also be nested
console.log(student.address.zips[1]);

// deleting a property
delete student.age;

// console.log(student);

//checking if a property exists
// prop in object
// console.log('name' in student);

// looping through an object
// for (const element in student) {
//     console.log(student[element]);
// }

// get all the keys of an object as an array
// Object.keys(<name of the object>)
// console.log(Object.keys(student));

// Object.keys(student).forEach(function (key) {
//     console.log(student[key]);
// });


// all the values
// console.log(Object.values(student));

const persons = [
    {
        name: 'mary',
        age: 23
    },
    {
        name: 'bob',
        age: 32,
    },
    {
        name: 'alice',
        age: 27
    }
];
console.log(Object.keys(persons[0]))

for (const person of persons) {
    console.log(Object.keys(person));
}