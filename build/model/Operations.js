"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const StatusEnum_1 = require("../enum/StatusEnum");
const WithdrawError_1 = __importDefault(require("../excecao/WithdrawError"));
class Operations {
    constructor(control) {
        this.status = StatusEnum_1.StatusTransference.Pending;
        this.control = control;
    }
    deposit(amount) {
        let saldo = this.control.db.getAcessBalance();
        this.control.db.setAcessBalance(saldo + amount);
        console.log("Balance:" + saldo);
        return saldo;
    }
    withdraw(amount) {
        let saldo = this.control.db.getAcessBalance();
        if (saldo < amount) {
            console.log("insufficient funds, you need to deposit: " + (amount - saldo));
            throw new WithdrawError_1.default(saldo);
        }
        else {
            this.control.db.setAcessBalance(saldo - amount);
            console.log("Balance:" + this.control.db.getAcessBalance());
        }
    }
    transference(amount) {
        let account1 = this.control.db.getAcessBalance();
        this.control.db.setAcessBalance(account1 - amount);
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);
    }
    mudaStatus(newStatus) {
        this.status = newStatus;
    }
    statusName(name) {
        if (name.length > 6) {
            this.mudaStatus(StatusEnum_1.StatusTransference.Completed);
            console.log(this.status, ",nome encontrado");
        }
        else {
            this.mudaStatus(StatusEnum_1.StatusTransference.Processing);
            console.log(this.status);
        }
    }
    statusCpf(cpf) {
        if (cpf === 11) {
            this.mudaStatus(StatusEnum_1.StatusTransference.Completed);
            console.log(this.status, ",cpf encontrado");
        }
        else {
            this.mudaStatus(StatusEnum_1.StatusTransference.Pending);
            console.log(this.status);
        }
    }
    //Erro
    completedMesage(name, money) {
        console.log(`Transference completed, ${money}$ to the ${name} bank`);
    }
}
exports.default = Operations;
