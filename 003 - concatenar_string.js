var dono = 'Arthur';
var ddd = '(61)';
var telefone = '9 9999-9999';
var numero = ddd.concat(" " + telefone);

// Concatenado com ','
console.log ("O Cliente", dono, "tem o seguinte numero de celular",ddd, telefone);

// Concatenado com '+'
console.log ("O Cliente "+ dono + " tem o seguinte numero de celular "+ numero);

// Concatenado em variavel com '$'
let texto = `O Cliente ${dono} tem o seguinte numero de celular ${ddd} ${telefone}`;
console.log(texto);

//Idade como Numero
var idade = 28;
console.log(idade + 1)

//Transforma idade em String
var idade = 28;
console.log(idade.toString() + 1);