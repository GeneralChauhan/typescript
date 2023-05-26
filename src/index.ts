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
