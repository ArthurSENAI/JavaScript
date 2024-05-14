/*
    O switch é uma estrutura de controle em 
    JavaScript que permite realizar comparações múltiplas 
    em um valor e executar diferentes blocos de código com base 
    nos resultados dessas comparações. Aqui 
    está um resumo do switch:
*/
const dia = 3;
let diatexto;

switch (dia) {
    case 1:
        diatexto = "Domingo";
        break;
    case 2:
        diatexto = "segunda-feira";
        break;
    case 3:
        diatexto = "terça-feira";
        break;
    case 4:
        diatexto = "quarta-feira";
        break;
    case 5:
        diatexto = "quinta-feira";
        break;
    case 6:
        diatexto = "sexta-feira";
        break;
    case 7:
        diatexto = "sábado";
        break;
    default:
        diatexto = "Dia inválido";
}
console.log("hoje é " = diatexto);

const pontuação = 75;
let mensagem;

switch (true) {
    case (pontuação >= 90):
        mensagem = "excelente desempenho!"
        break;
    case (pontuação >= 70):
        mensagem = "bom trabalho!";
        break;
    case (pontuação >= 50):
        mensagem = "voce pode melhorar!";
        break;
    default:
        mensagem = "estude mais!";
}

console.log(mensagem);