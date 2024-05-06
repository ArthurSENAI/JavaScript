/*
    TIPO NUMERO
        parseInt
        parseFloat
*/
// Variavel Number
var idade = 29;
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel String
var idade = '29';
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel String em Number
var idade = Number('29');
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel Boolean
var number = true;
console.log(typeof number, number);

// Variavel Boolean em Number
var number = Number(false);
console.log(typeof number, number);
var number = Number(true);
console.log(typeof number, number);

// Variavel Date
var number = new Date();
console.log(typeof number, number);

// Variavel  Date em Number
var number = Number(new Date());
console.log(typeof number, number);

// Converter de string para numero usando o parseInt

var n = '29.230421598321684'
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

