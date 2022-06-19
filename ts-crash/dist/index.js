"use strict";
// 1) Basic Types
let age = 37;
let myname = 'Muhiddin';
let married = false;
let anyType = 'Mike';
anyType = 12;
anyType = true;
anyType = 'Don';
let ids = [1, 2, 3, 4, 5];
let anyArrayValue = [1, true, 'Mike'];
// 2) Tuple = order is important. U cant put num after str here.
let person = [1, 'Bard', true];
// Tuple Array
let girl;
girl = [
    [1, 'Lola'],
    [2, 'Jasmin'],
    [3, 'Leyla'],
];
// 3) Unions
let herContact = 22;
herContact = 'Lola';
herContact = 93.9909090;
// 4) Enum (Enumirate Type) = a set of named constants
// w/o set values 'up, down', enum returns key's index
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
// 5) Objects
const user = {
    id: 1,
    name: 'Maya'
};
// 6) Type Assertion (change type before compile) in 2 ways
let userId = 12;
// a) let customerId = <number>userId;
let customerId = userId;
// 7) Functions: arguments + return value is number
function addNum(num1, num2) {
    return num1 + num2;
}
// 8) Void
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Maya'
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
class Person {
    constructor(id, name) {
        this.id = id,
            this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// 12) Subclass
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
// 13) Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4]);
let strArray = getArray(['brad', 'John', 'Jill']);
numArray.push(1);
// const emp = new Employee(2, 'Shawn', 'Developer');
// console.log('emp', emp)
// const brad = new Person(37, 'Mike');
// const dean = new Person(27, 'dean');
// console.log(brad.name, dean.name)
// console.log(brad.register())
