var dono = 'Arthur';
var ddd = '(61)';
var telefone = '9 9999-9999';
var numero = ddd.concat(" " + telefone);
console.log ("O Cliente", dono, "tem o seguinte numero de celular",ddd, telefone);
console.log ("O Cliente "+ dono + " tem o seguinte numero de celular "+ numero);

let texto = `O Cliente ${dono} tem o seguinte numero de celular ${ddd} ${telefone}`
console.log(texto)