"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("./User"));
class Conta extends User_1.default {
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
exports.default = Conta;
