//ByteBank
import {Cliente} from "./src/Cliente.js";
import {ContaCorrente} from "./src/ContaCorrente.js";

const cliente1 = new Cliente("Vicente", 12234456678); // Objeto
const cliente2 = new Cliente("Alice", 21938210931);
console.log(cliente2.cpf);

const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
const conta2 = new ContaCorrente(102, cliente2);
contaCorrenteRicardo.depositar(500);

let valor = 200;
contaCorrenteRicardo.transferir(valor, conta2);

// conta2.saldo = 30000; -> Não funciona pois o elemento não é possível ser acessado.

console.log(ContaCorrente.numeroDeContas);
