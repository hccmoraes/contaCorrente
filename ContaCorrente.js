export class ContaCorrente{
    agencia;
    cliente;

    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
            return valor;
        }else{
            console.log('A conta não possui saldo suficiente');
        }
    }
    depositar(valor){
        if(valor > 0){
            this.saldo += valor
            return valor;
        }else{
            console.log('Valor inválido, tente novamente')
        }
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}