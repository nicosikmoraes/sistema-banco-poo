"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusEnum_1 = require("../enum/StatusEnum");
const WithdrawError_1 = __importDefault(require("../exception/WithdrawError"));
class Operations {
    constructor(control) {
        this.status = StatusEnum_1.StatusTransference.Pending;
        this.control = control;
    }
    deposit(amount) {
        // Pega o saldo atual.
        let saldo = this.control.db.getAcessBalance();
        // Atualiza o saldo com o depósito.
        this.control.db.setAcessBalance(saldo + amount);
        // Mostra o saldo atual.
        console.log("Balance:" + saldo);
        return saldo;
    }
    withdraw(amount) {
        // Pega o saldo atual.
        let saldo = this.control.db.getAcessBalance();
        // Verifica se o saldo é suficiente.
        if (saldo < amount) {
            // Se não, exibe uma mensagem de erro.
            console.log("insufficient funds, you need to deposit: " + (amount - saldo));
            throw new WithdrawError_1.default(saldo);
        }
        else {
            // Se sim, atualiza o saldo com o saque.
            this.control.db.setAcessBalance(saldo - amount);
            console.log("Balance:" + this.control.db.getAcessBalance());
        }
    }
    transference(amount) {
        // Pega o saldo atual.
        let account1 = this.control.db.getAcessBalance();
        //Atualiza o saldo da conta 1.
        this.control.db.setAcessBalance(account1 - amount);
        //Atualiza o saldo da conta 2.
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);
    }
    // Muda o status da transferência.
    mudaStatus(newStatus) {
        this.status = newStatus;
    }
    // Verifica o status da transferência.
    statusName(name) {
        // Verifica se o nome é maior que 6 caracteres.
        if (name.length > 6) {
            // Se sim, muda o status da transferência para concluída.
            this.mudaStatus(StatusEnum_1.StatusTransference.Completed);
            console.log(this.status, ",Name Found");
        }
        else {
            // Se não, muda o status da transferência para em processamento.
            this.mudaStatus(StatusEnum_1.StatusTransference.Processing);
            console.log(this.status);
        }
    }
    // Verifica o status do CPF.
    statusCpf(cpf) {
        // Verifica se o CPF é 11.
        if (cpf === 11) {
            // Se sim, muda o status da transferência para concluída.
            this.mudaStatus(StatusEnum_1.StatusTransference.Completed);
            console.log(this.status, ",Social Number Found");
        }
        else {
            // Se não, muda o status da transferência para pendente.
            this.mudaStatus(StatusEnum_1.StatusTransference.Pending);
            console.log(this.status);
        }
    }
    // Método para mostrar uma mensagem de sucesso.
    completedMesage(name, money) {
        console.log(`Transference completed, ${money}$ to the ${name} bank`);
    }
}
exports.default = Operations;
