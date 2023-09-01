//Interpreter Vs Compiler (And JIT)

Interpreter coverts to byte code.
Byte code is quick to convert, but slow to run.

Compiler coverts to machine code.
Machine code is slow to convert, but quick to run.

JIT compiler -> JustInTime compiler. It's a combination of both of the above. It's used in google chrome.
JavaScript uses interpreter.

Interpreted byte code gets converted quickly and runs for a while,then when the machine code is ready by compiler, it starts replacing the byte code of interpreter by inspector.

//var vs let (And window object)

var ES5
function-scoped
i.e., void function() {for(var i = ...){..)....} it can be used in the entire function 
joins itself to window object and gets exposed


let 
ES6
block-scoped or braces-scoped
it is limited to the immediate {..} 
doesn't join itself to window object

Window Object
There are some things in JS language which are not a part of JS but are provided by the browser.
e.g., console, setTimeout, alert, document, etc.
type window in console to know them, there the var will be printed and let will be printed

//Primitives vs References
Primitives are values that can be copied as they are and changes made in copy reflect only in the copy
Reference cannot be copied. They are of three types: [Arrays] , {Objects} , and (functions)
 
var a = [1,2,3,4]
var b = a
b.pop();
console.log(a) ==> [1,2,3]

//Conditionals

if(x) {..} else {..}

x can be one of the three things:
true/false (directly)
something that translates to true/false
truth/falsy

Falsy values include-
0,"", NULL, undefined, NAN, document.all
Anything except this is truthy

//The || operator
falsy || null gives null
truthy || null gives truthy value
truthy1 || truthy2 give t1

//Taking input through prompt () 
whatever input you take through this is considered a string always if you 
var a = prompt ("Give Number") ; //10 
a+20 will mean then 1020
Typecasting var b = Number (a) 
b+20 will mean 30
or in face var a = +prompt("Give Number") will also typecast

If you divide even after the remainder is smaller than the divisor, the quotient goes into decimals

//for each loop
var arr = [1,2,3,4,5,6,7,8,9,0]
arr.forEach(function(x){console.log(x)})

//map 
arrayA ke har element pe kuch operation krke usko arrayB ke corresponding indices pe rkhna hai
arrayB = arrayA.map(function(x) {return x+2})
so [3,4,5,6,7,8,9,10,11,2]

//filter
map with a special filter
arrayB = arrayA.filter(function(x) {return x>5})
it'll be [6,7,8,9]

//reduce
reduce or shorten the array to a single variable
var B = arrayB.reduce(function(accumulator,current_value){
 acc += cv; return accl0
}, "initial_accumulator"->0
console.log(B)

//objects
var ob{
 name: Pranay
 age: 20
 intro: function(){
  return "My Name is Pranay Parikh"
 }
}
console.log(ob.name)
console.log(ob.intro())

//first class functions
In javascript the functions are first class, which means that they can take other functions as their arguments and also can be assigned to other constants in the program.