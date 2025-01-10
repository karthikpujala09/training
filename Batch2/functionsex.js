
// without parameters
// function demo(){
//     console.log("function is executing......");
// }
// demo();


// with parameters and arguments
// let a = 10; a=parameter , 10=arguments

// 5,6
// 8,9
// 3,4
// function add(a,b){
//     console.log(a+b);
// }
// add(5,6);
// add(8,9);
// add(3,4);


// named function
// function test(){
//     console.log("named function is executing.....")
// }
// test();


// anonymous function

// function(){
// console.log();
// }
// ();


// function expression

// let x = function(){
//     console.log("anonymous is not executing but executing with variable");

// }
// //console.log(x);
// x();

// IIFE (immediate invoke function expression)

// (
//     function(){
//         console.log("IIFE");

//     }
// )();

// arrow function

// function demo(){
//     // statements
// }
// demo();

// let x =_=>console.log("Arrow function");
// x();
// let x =(a, b)=>console.log(a, b);
// x(6 , 5);

// implicit returns and explicit returns

// function test1(a,b){
    
//     return a+b;
// }
// console.log(test1(5,5));

// // explicit returns
// let x = (a,b) => {return a*b};
// console.log(x(5,5));

// // implicit returns
// let y = (a,b) => a+b;
// console.log(y(100,200));



// Higher order function & callback function

// function hof(a){ // higher order function
//     return a();
// }
// let x = hof (function(){return "Callback function"});
// console.log(x);

// let y = function(){return "Callback function"};
// console.log(y());

// let users = ["Manoj" , "Raj" , "Ravi" , "Rahul"];
// console.log(users);
// users.map(function(user){console.log(user)})