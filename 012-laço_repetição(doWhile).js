// do-while

let i = 0;
do{
console.log(1);
1++;
} while (i <= 5);


const frutas = ['maça',' banana',' laranja','pera','melancia'];
let j = 0;
do {
    console.log('eu gosto de ' + frutas[j]);
    j++;
} while (j < frutas.length);


let k = 0;
do {
    if (k === 5){
        break;
    }
    console.log(k);
    k++;
}while (k < 10)