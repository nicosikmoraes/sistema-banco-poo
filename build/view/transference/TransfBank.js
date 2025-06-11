"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TransferenceSameBank {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    getCpf2() {
        return this.nCpf2;
    }
    transferenceMoney() {
        // Pede ao usuário o CPF da conta para a qual ele quer transferir o dinheiro.
        let cpf2 = this.prompt("Which account do you want to transfer the money?");
        this.nCpf2 = Number(cpf2); //Transformando a string em número.
        // Pega as informações da conta para a qual ele quer transferir o dinheiro.
        this.control.db.getAccountToTransference(this.nCpf2);
        // Pede ao usuário o valor que ele quer transferir.
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount); //Transformando a string em número.
        // Chama a operação de transferência.
        this.control.operations.transference(nAmount);
    }
}
exports.default = TransferenceSameBank;
