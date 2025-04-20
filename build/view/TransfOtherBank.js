"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TransfSameBank_1 = __importDefault(require("./TransfSameBank"));
class TransferenceOtherBank extends TransfSameBank_1.default {
    constructor(control) {
        super(control);
    }
    transferenceMoney() {
        let bankName = this.prompt("What is the name of the bank?");
        let cpf2 = this.prompt("Which account do you want to transfer the money?");
        this.setCpf2(Number(cpf2));
        this.control.db.getAccountToTransference(this.getCpf2());
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount);
        this.control.operations.transference(nAmount);
    }
}
exports.default = TransferenceOtherBank;
