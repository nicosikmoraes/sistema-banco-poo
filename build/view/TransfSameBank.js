"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferenceOtherBank = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class TransferenceSameBank {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    getCpf2() {
        return this.nCpf2;
    }
    setCpf2(cpf) {
        this.nCpf2 = cpf;
    }
    transferenceMoney() {
        let cpf2 = this.prompt("Which account do you want to transfer the money?");
        this.nCpf2 = Number(cpf2);
        this.control.db.getAccountToTransference(this.nCpf2);
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount);
        this.control.operations.transference(nAmount);
    }
}
exports.default = TransferenceSameBank;
class TransferenceOtherBank extends TransferenceSameBank {
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
exports.TransferenceOtherBank = TransferenceOtherBank;
