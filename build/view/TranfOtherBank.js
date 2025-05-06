"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransfBank_1 = __importDefault(require("./TransfBank"));
class TransferenceOtherBank extends TransfBank_1.default {
    constructor(control, bankInfo) {
        super(control);
        this.bankInfo = bankInfo;
    }
    //Sobrescrita
    transferenceMoney() {
        //Injeção de dependências por meio de uma Interface (OtherBank)
        this.bankInfo.name = this.prompt("What is the name of the bank?");
        this.bankInfo.money = this.prompt("What is the coin that you want to transfer?");
        let cpf = this.prompt("if you know what is the Social Number of the account?");
        this.numCpf = Number(cpf);
        this.name = this.prompt("If you don't, what is the full name of who you want make the transition?");
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount);
        this.control.operations.withdraw(nAmount);
        this.checkStringNumber(this.numCpf, this.name);
    }
    checkStringNumber(ncpf, name) {
        if (ncpf === 0) {
            this.cpfOrName(name);
        }
        else {
            this.cpfOrName(ncpf);
        }
    }
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
