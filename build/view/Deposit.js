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
    depositMoney() {
        let amount = this.prompt("\nHow much do you want to deposit?");
        let nAmount = Number(amount);
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() + nAmount);
        console.log("Balance:" + this.control.db.getAcessBalance());
    }
}
exports.default = Deposit;
