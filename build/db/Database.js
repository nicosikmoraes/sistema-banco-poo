"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.userDb = [];
        this.acessKey = false;
    }
    //Adicionando ao banco de dados o usuário.
    addNewUser(user) {
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }
    getUser(index) {
        return this.userDb[index];
    }
    getAcessBalance() {
        return this.acessBalance;
    }
    setAcessBalance(newBalance) {
        this.acessBalance = newBalance;
    }
    getAcessName() {
        return this.accessName;
    }
    getAcessSocialNumber() {
        return this.accessSocialNumber;
    }
    listAll() {
        for (let index = 0; index < this.userDb.length; index++) {
            const element = this.userDb[index];
            console.log(`\n${element.getName()} \n${element.getSocialNumber()} \n${element.getBalance()}`);
        }
    }
    //Quando for logar e quiser ver o saldo.
    listBalance(cpf) {
        let y = 0;
        for (let index = 0; index < this.userDb.length; index++) {
            const element = this.userDb[index];
            if (cpf == element.getSocialNumber()) {
                console.log(`\n ${element.getName()} \n ${element.getBalance()} \n ${element.getSocialNumber()}`);
                this.acessBalance = element.getBalance();
                this.accessName = element.getName();
                this.accessSocialNumber = element.getSocialNumber();
            }
            else {
                y++;
            }
            ;
        }
        if (y >= this.userDb.length) {
            console.log("Not found");
        }
        else {
            this.acessKey = true;
        }
    }
    changeDb(cpf) {
        for (let index = 0; index < this.userDb.length; index++) {
            const element = this.userDb[index];
            if (cpf == element.getSocialNumber()) {
                element.setBalance(this.acessBalance);
            }
        }
    }
}
exports.default = Database;
