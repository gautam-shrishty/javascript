//1.write an object of all data types as their name as key, and value as the data-type itself.For eg.let dataTypes={number:10,.......}
var datatype = {
  string: "abc",
  number: 10,
  boolean: false,
  null: null,
  undefined: undefined,
  array: ['a','b','c'],
 }
 console.log(typeof (datatype.null)); 
//2.write a function that takes a single argument and returns its data-type and length.For eg.checkType('hello')should return string
//and length:5 checkType(['a',8,true]) should return object and length:3
function checkType(str) {
  var obj = {
    datatype: typeof str,
    length: str.length,
  }
  return obj;
}
console.log(checkType("hello")); 

//3.Write a function which creates an empty object, and then adds 4 properties and returns that object
var obj = { };
function addPro () {
  obj.property1 = "name";
  obj.property2 = "skills";
  obj.property3 = "experience";
  obj.property4 = "birth";
  return obj;
}
console.log(addPro()); 
//4.Write an unnamed function and store that in a variable.Create a second variable and assign the function calling to it
let unnamed = function() {return true;}
 let nameValue = unnamed();
 console.log(nameValue); 

 //5.Write an array of all data types and a random function call each of the values typeof.
 var arr = ['hello',10,true,undefined,null];
function random(arr){
  
var newarr = arr[Math.floor(Math.random()*arr.length)];
  return typeof newarr;
}
console.log(random(arr));

 //6. Write  a function that has 4 function inside and returns an object of all those 4 function with keys as function
// names and values as function calling.
 function name() {
  function one() {return "one"}
  function two() {return "two"}
  function three() {return "three"}
  function four() {return "four"}
  return {one: one(),
          two: two(),
          three: three(),
          four: four(),}
} 
console.log(name());
 