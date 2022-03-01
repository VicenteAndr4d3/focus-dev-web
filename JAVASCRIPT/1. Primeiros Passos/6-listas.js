console.log(`Trabalhando com Listas`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// let new = 2 Unexpected token

listaDeDestinos.push(`Curitiba`) // Adicionar um novo elemento na lista

console.log("Destinos possíveis: ");
// console.log(salvador,saoPaulo,rioDeJaneiro);
console.log(listaDeDestinos);

listaDeDestinos.splice(1, 1); // Removendo um elemento da lista
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[2]); // Mostra o indice do elemento na lista


