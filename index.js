import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;


const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.saldo = 0;
contaCorrenteRicardo.cliente = cliente1
contaCorrenteRicardo.depositar(800);

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.cliente = cliente2
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1004

//contaCorrenteRicardo.depositar(100);
//const valorSacado = contaCorrenteRicardo.sacar(50);
//console.log(valorSacado);

contaCorrenteRicardo.transferir(500, contaCorrenteAlice);

//contaCorrenteAlice.depositar(600);
//const valorSacado = contaCorrenteAlice.sacar(200);
//console.log(contaCorrenteAlice.saldo);
//console.log(valorSacado);


//console.log(contaCorrenteRicardo);
console.log(contaCorrenteAlice);
console.log(contaCorrenteRicardo);



//console.log(cliente1);
//console.log(cliente2);
