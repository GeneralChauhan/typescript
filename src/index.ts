//Basic Types
let numy : number = 5;
let stringy : string = "Hello";
let isPublished : boolean = true;
let x : any = "Hi";

// Arrays
let numyArray : number[] = [1,2,3,4,5];
let anyArray : any[] = [1,2,3,4,5];


//Tuple
let person : [string, number, boolean] = ["Abhinab", 18, true];

//Tuple Array
let employee : [string, number][];

employee=[[ "Abhinab", 18],[ "Young Abhinab", 10],[ "Old Abhinab", 38]];

//Unions
let ids : string | number = 5;
ids = "5";

//enums
enum Direction1 {
    Up,
    Down,
    Left,
    Right
}

//Objects
type User = {
    id: number,
    name: string
}
const user: User ={ 
    id: 1,
    name: "Abhinab"
}
//Type Assertion
let cid : any = 1;

//let customerId = <number>cid;
let customerId = cid as number;


//functions
function addNum(x:number, y:number): number{
    
    console.log(x+y);
    return(x+y);
}
function log(message:string | number):void{
    console.log(message);
}

//Interfaces
interface UserInterface{
    readonly id: number,
    name: string,
    age?: number
}


const user1: UserInterface ={
    id: 1,
    name: "Abhinab"
}

interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number):number => x+y;
const sub: MathFunc = (x:number, y:number):number => x-y;
//Interfaces
interface PersonInterface{
    id: number,
    name: string,

    register(): string
}


//Classes
class Person implements PersonInterface{
    id:number;
    name:string;
    constructor(id:number, name:string){
        this.id = id;
        this.name = name;
    }
    register(){
        return `${this.name} is now registered`;
    }
}

const abhinab = new Person(1, "Abhinab");


class Employee extends Person{  
    position:string;
    constructor(id:number, name:string, position:string){
        super(id, name);
        this.position = position;
    }
}

const emp = new Employee(3, "Abhinab", "Developer");

//Generics
function getArray<T>(items:T[]):T[]{
    return new Array().concat(items);
}

let numArray = getArray<number>([1,2,3,4]);
let strArray = getArray<string>(["Abhinab", "Abhinab", "Abhinab"]);


//Basic Type Script Done
//Next up is Matt Paddock's tutorial on TypeScript