"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithdrawError extends Error {
    constructor(currentFunds) {
        super("Insufficient funds | Current Balance: " + currentFunds);
    }
}
exports.default = WithdrawError;
