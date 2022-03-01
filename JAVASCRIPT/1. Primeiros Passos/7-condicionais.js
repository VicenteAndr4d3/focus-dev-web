console.log(`Trabalhando com Condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 13;
const estaAcompanhado = false;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) { // Se tiver idade maior ou igual a 18
//     console.log("Comprador maior de idade");
//     listaDeDestinos.splice(1, 1); // Removendo um elemento da lista

// } else if (estaAcompanhado) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); // Removendo um elemento da lista
    
// } else {
//     console.log("Não é possivel vender, Motivo: Não é maior de idade e não está acompanhado");
// }


if (idadeComprador > 18 || estaAcompanhado) { // Se tiver idade maior ou igual a 18
    console.log("Boa viagem!");
    listaDeDestinos.splice(1, 1); // Removendo um elemento da lista
} else {
    console.log("Não é possivel vender, Motivo: Não é maior de idade e não está acompanhado");
}

console.log("Embarque: \n\n");
if(idadeComprador > 18 && temPassagemComprada){
    console("Boa Viagem!");
} else {
    console.log('Você não pode embarcar');
}

console.log(listaDeDestinos);

// Operador Boolean
// console.log(idadeComprador > 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador == 18);

