// Crie um algoritimo que leia o valor inicial 
// da contagem, o valor final e o 
// incremento, mostrando em seguida todos 
// os valores no intervalo

let numero1 = parseInt(prompt("Digite o valor inicial:"));
let numero2 = parseInt(prompt("Digite o valor final:"));
let incremento = parseInt(prompt("Digite o valor do incremento:"));
let resultado = ""

for (numero1; numero1 <= numero2; incremento) {

    resultado += `${numero1} `;
    numero1 += incremento;

}

console.log(resultado);

alert(resultado);
