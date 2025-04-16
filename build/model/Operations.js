"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operations {
    constructor(control) {
        this.control = control;
    }
    deposit(amount) {
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() + amount);
        console.log("Balance:" + this.control.db.getAcessBalance());
    }
    withdraw(amount) {
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() - amount);
        console.log("Balance:" + this.control.db.getAcessBalance());
    }
    transference(amount) {
        let account1 = this.control.db.getAcessBalance();
        this.control.db.setAcessBalance(account1 - amount);
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);
    }
}
exports.default = Operations;
