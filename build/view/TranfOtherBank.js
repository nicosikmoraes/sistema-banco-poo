"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransfBank_1 = __importDefault(require("./TransfBank"));
class TransferenceOtherBank extends TransfBank_1.default {
    constructor(control) {
        super(control);
    }
    //Sobrescrita
    transferenceMoney() {
        let bankName = this.prompt("What is the name of the bank?");
        let cpf = this.prompt("if you know what is the Social Number of the account?");
        let ncpf = Number(cpf);
        let name = this.prompt("If you don't, what is the full name of who you want make the transition?");
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount);
        this.control.operations.withdraw(nAmount);
        this.checkStringNumber(ncpf, name);
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
            console.log("Cpf encontrado!");
        }
        else if (typeof param === "string") {
            console.log("Nome encontrado!");
        }
    }
}
exports.default = TransferenceOtherBank;
