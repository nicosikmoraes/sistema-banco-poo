"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WithdrawError extends Error {
    constructor(s) {
        super(s + "insufficient funds");
    }
}
exports.default = WithdrawError;
