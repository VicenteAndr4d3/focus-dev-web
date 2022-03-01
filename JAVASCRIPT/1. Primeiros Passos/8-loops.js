console.log(`\nTrabalhando com Loops`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhado = false;
let temPassagemComprada = false;
const destino = "Piauí";


console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

const podeComprar = idadeComprador > 18 || estaAcompanhado;
let contador = 0;
let destinoExiste = false;

while(contador < 3) {
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        break; // Caso exista o valor dentro, quebra de imediato o loop com o resultado
    } 
    contador += 1;
}
console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste) {
    console.log("Boa viagem");
} else {
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i < 3; i++) {
    if(listaDeDestinos[i] == destino){
        destinoExiste = true;
        break; // Caso exista o valor dentro, quebra de imediato o loop com o resultado
    } 
}

console.log(listaDeDestinos);