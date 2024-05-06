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

// Converter de string(TEXTO) para numero INTEIRO usando o parseInt
var n = '29.23'
console.log(typeof n, n)
console.log(typeof parseInt(n), parseInt(n))

// Converter de string(TEXTO) para numero REAL usando o parseFloat
var n = '29.23'
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n))

// Não há como Converter string(TEXTO) em Number. O Resultado sera NaN(Not a Number)
var n = 'hsfdjkbsadjkfbsdjk'
console.log(typeof n, n)
console.log(typeof Number(n), Number(n))