// 1) Basic Types
let age: number = 37;
let myname: string = 'Muhiddin';
let married: boolean = false;
let anyType: any = 'Mike'
anyType = 12;
anyType = true;
anyType = 'Don';

let ids: number[] = [1,2,3,4,5];
let anyArrayValue: any[] = [1, true, 'Mike'];


// 2) Tuple = order is important. U cant put num after str here.
let person: [number, string, boolean] = [1, 'Bard', true];

// Tuple Array
let girl: [number, string][];
girl = [
    [1, 'Lola'],
    [2, 'Jasmin'],
    [3, 'Leyla'],
]

// 3) Unions
let herContact: string | number = 22;
herContact = 'Lola';
herContact = 93.9909090;


// 4) Enum (Enumirate Type) = a set of named constants
// w/o set values 'up, down', enum returns key's index
enum Direction {
    Up = 'Up',
    Down = 'Down',
    Left = 'Left',
    Right = 'Right'
}

type User = {
    id: number,
    name: string,
}


// 5) Objects
const user: User = {
    id: 1,
    name: 'Maya'
}


// 6) Type Assertion (change type before compile) in 2 ways
let userId: any = 12;
// a) let customerId = <number>userId;
let customerId = userId as number;


// 7) Functions: arguments + return value is number
function addNum(num1: number, num2: number): number {
    return num1 + num2;
}

// 8) Void
function log(message: string | number ){
    console.log(message)
}

// 9) Interfaces = custom types
interface UserInterface {
    readonly id: number, //readonly = cannot assign new value
    name: string
    age?: number // ? = optional and wont give error if not defined 
}

const user1: UserInterface = {
    id: 1,
    name: 'Maya'
}

// 10) Interfaces with functions
interface MathFunc {
    (x: number, y: number):number
}
const add: MathFunc = (x:number, y:number):number => x + y;
const sub: MathFunc = (x:number, y:number):number => x - y;

// 11) Classes
interface PersonInterface {
    id: number,
    name: string,
    register(): string //returns string
}

class Person implements PersonInterface {
    // private id: number  //protected, private, public = default
    id: number
    name: string

    constructor(id:number, name:string){
        this.id = id,
        this.name = name
    }

    register(){
        return `${this.name} is now registered`
    }
}


// 12) Subclass
class Employee extends Person {
    position: string

    constructor(id:number, name:string, position:string){
        super(id,name);
        this.position = position;
    }
}


// 13) Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items)
}
let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(['brad','John','Jill']);
numArray.push(1);



// const emp = new Employee(2, 'Shawn', 'Developer');
// console.log('emp', emp)
// const brad = new Person(37, 'Mike');
// const dean = new Person(27, 'dean');
// console.log(brad.name, dean.name)
// console.log(brad.register())
