// Immediately Invoked Function Expressions (IIFE)


function chai(){// named iife
    console.log(`DB CONNECTED`);
}
chai()//out = DB CONNECTED


(function chai(){
    console.log(`DB CONNECTED`);
})();

(function aurcode(){
    console.log(`DB CONNECTED`);
})()


((name) =>{
    console.log(`DB CONNECTED TWO ${name}`);
}) ('hitesh') // DB CONNECT TWO HITESH