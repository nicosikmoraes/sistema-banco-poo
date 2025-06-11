"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Deposit {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    getNewBalance() {
        return this.newBalance;
    }
    //Método para ter acesso ao novo saldo após o depósito.
    depositMoney() {
        //Pede ao usuário o valor que ele quer depositar.
        let amount = this.prompt("\nHow much do you want to deposit?");
        let nAmount = Number(amount); //Transformando a string em número.
        // Chama a operação de depósito.
        this.control.operations.deposit(nAmount);
    }
}
exports.default = Deposit;
