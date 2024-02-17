let score= "33abc";
let score1=undefined;  // null also checked
// const {score}=req.body;

//two ways to write typeof
console.log( typeof score);
console.log(typeof(score));

let valueInNumber= Number(score);
let valueInNumber1=Number(score1);
console.log(typeof(valueInNumber));  //number-> 33abc  ;  number ->33
console.log(valueInNumber);  //NaN-> 33abc ; 33->33

console.log(typeof valueInNumber1);
console.log(valueInNumber1);

//"33" => 33
//"33abc"=> NaN
//true=>1
//false=> 0


let isLoggedIn =" ";
let booleanIsLoggedIn= Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);  //""=> false  " "=> true  "hitesh"=> true

let someNumber= 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);