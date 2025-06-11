"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransfBank_1 = __importDefault(require("./TransfBank"));
class TransferenceOtherBank extends TransfBank_1.default {
    constructor(control, message) {
        super(control);
        this.message = message;
    }
    //Sobrescrita
    transferenceMoney() {
        //Pedir as informações necessárias para a transferência entre bancos diferentes.
        //Injeção de dependências por meio de uma Interface (OtherBank)
        this.nameBank = this.prompt("What is the name of the bank?");
        let cpf = this.prompt("if you know what is the Social Number of the account?");
        this.numCpf = Number(cpf); //Transformando a string em número.
        this.name = this.prompt("If you don't, what is the full name of who you want make the transition?");
        let amount = this.prompt("How much do you want to transfer?");
        this.nAmount = Number(amount); //Transformando a string em número.
        // Retiro o valor que eu transferi da minha conta.
        this.control.operations.withdraw(this.nAmount);
        // Descobre se foi passado o CPF ou o nome.
        this.checkStringNumber(this.numCpf, this.name);
        //Mando a mensagem de sucesso.
        this.message.completedMessage2(this.nameBank);
    }
    // Método para verificar se foi passado o CPF ou o nome.
    checkStringNumber(ncpf, name) {
        if (ncpf === 0) {
            this.cpfOrName(name);
        }
        else {
            this.cpfOrName(ncpf);
        }
    }
    //Método que chama a mensagem de confirmação de CPF ou nome. Se foi encontrado ou não.
    cpfOrName(param) {
        if (typeof param === "number") {
            this.control.operations.statusCpf(this.numCpf);
        }
        else if (typeof param === "string") {
            this.control.operations.statusName(this.name);
        }
    }
}
exports.default = TransferenceOtherBank;
