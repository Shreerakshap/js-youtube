const accountId= 144553
let accountEmail="s@gmail.com"
var accountPassword="12345";
accountCity="Jaipur";//not a good practise
let accountState;
// accountId=2; //not allowed
accountEmail="a@gmail.com"
accountPassword="21212121"
accountCity="Bangalore";
console.log(accountId);

/*
Prefer not to use var bacause of issues in block scope and functional scope
*/
// console.log(accountEmail);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
