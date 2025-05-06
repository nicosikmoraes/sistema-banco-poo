"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Operations {
    constructor(control, status) {
        this.control = control;
        this.status = status;
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
    statusName(name) {
        if (name.length > 6) {
            this.status = StatusTransference.Completed;
        }
        else {
            this.status = StatusTransference.Processing;
        }
        console.log(this.status);
    }
    statusCpf(cpf) {
        if (cpf === 11) {
            this.status = StatusTransference.Completed;
        }
        else {
            this.status = StatusTransference.Pendent;
        }
        console.log(this.status);
    }
}
exports.default = Operations;
