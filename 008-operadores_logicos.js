/*
OPERADORES LOGICOS
E (AND) - &&(java script) - ((x<10) && (x>0))
OU (OR) - ||(java script) - ((x<10) || (x>0))
NEGAÇÃO - !(java script) - (!true = false) 
*/

let a = 5;
let b = 7;

//E(AND)
if (a >= b && a === b) {
    console.log("a é maior E igual a b");
} else {
    console.log("a não é maior E igual a b")
};

let c = 8;
let d = 7;

//OU(OR)
if(c >= d || c === d){
    console.log("c é maior OU igual a d")
} else {
    console.log("c não é maior ou igual a d")
};

let e = 9;
let f = 7;

//Negação
if(!(e < f || e == f)) {
    console.log("e é maior OU igual a f")
} else {
    console.log("e não é maior ou igual a f")
};