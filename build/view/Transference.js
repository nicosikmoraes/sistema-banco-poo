"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Transference {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    getCpf2() {
        return this.nCpf2;
    }
    transfereceMoney() {
        let acconut1 = this.control.db.getAcessBalance();
        let cpf2 = this.prompt("Which account do you want to transfer the money?");
        this.nCpf2 = Number(cpf2);
        this.control.db.getAccountToTransference(this.nCpf2);
        let amount = this.prompt("How much do you want to transfer?");
        let nAmount = Number(amount);
        this.control.db.setAcessBalance(acconut1 - nAmount);
        this.control.db.setAccount2(this.control.db.getAccount2() + nAmount);
    }
}
exports.default = Transference;
