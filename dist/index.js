"use strict";
//Basic Types
let numy = 5;
let stringy = "Hello";
let isPublished = true;
let x = "Hi";
// Arrays
let numyArray = [1, 2, 3, 4, 5];
let anyArray = [1, 2, 3, 4, 5];
//Tuple
let person = ["Abhinab", 18, true];
//Tuple Array
let employee;
employee = [["Abhinab", 18], ["Young Abhinab", 10], ["Old Abhinab", 38]];
//Unions
let ids = 5;
ids = "5";
//enums
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 0] = "Up";
    Direction1[Direction1["Down"] = 1] = "Down";
    Direction1[Direction1["Left"] = 2] = "Left";
    Direction1[Direction1["Right"] = 3] = "Right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: "Abhinab"
};
//Type Assertion
let cid = 1;
//let customerId = <number>cid;
let customerId = cid;
//functions
function addNum(x, y) {
    console.log(x + y);
    return (x + y);
}
function log(message) {
    console.log(message);
}
