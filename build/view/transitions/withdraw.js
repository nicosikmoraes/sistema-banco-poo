"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class Withdraw {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    getNewBalance() {
        return this.newBalance;
    }
    withdrawMoney() {
        let amount = this.prompt("\nHow much do you want to withdraw?");
        let nAmount = Number(amount);
        this.control.operations.withdraw(nAmount);
    }
}
exports.default = Withdraw;
