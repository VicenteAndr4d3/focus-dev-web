import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    agencia;

    _cliente;
    // #saldo https://github.com/tc39/proposal-class-fields#private-fields - Convenções sobre campos privados
    _saldo = 0;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){ // Só é adicionado o valor na variável caso seja instância do outro objeto
            this._cliente = novoValor;
        }
    }

    get client(){
        return this._cliente;
    }
    
    get saldo(){
        return this._saldo;
    }

    constructor(agencia, cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1; // Contagem do elemento static
    }

    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        // Early Return
        if(valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}