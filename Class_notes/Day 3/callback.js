function greet() {   // Normal function
    console.log("Hello");
}

function execute(callback) { // 'callback' is a parameter that receives the greet function
    callback();               // Calls greet()
}

execute(greet); // Here greet is passed as an argument, so it acts as a callback function




function even(a){
  if(a % 2 === 0){
    console.log("even")
  }
}
function number(callback){
  callback(10) ; 
}
number(even);

function display(callback) {  // Normal function. 'callback' is a parameter.
    callback();               // Executes the function stored in 'callback'.
}

display(() => {               // Passing an anonymous arrow function as an argument.
    console.log("Hello");     // This arrow function acts as the callback function.
});