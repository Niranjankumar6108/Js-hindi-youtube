const accountId = 144553
let accountEmail = "niranjankuma123@gmail.com"
var accountPassword = "12354"
accountCity = "Jaipur"
let accountState;

//accountId = 2 // not allowed (not change)

accountEmail = "haas@gmajd.com"
accountPassword = "12345"
accountCity = "Patna"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail, accountId, accountCity,accountPassword,accountState])