"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.userDb = [];
        this.accountDb = [];
        this.acessKey = false;
    }
    //Adicionando ao banco de dados o usuário.
    addNewUser(user) {
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }
    //Adicionando item ao banco de dados da conta (balance)
    addNewAcount(conta) {
        this.accountDb.push(conta);
    }
    //Informações do usuário
    getUser(index) {
        return this.userDb[index];
    }
    //Valores da conta acessada no login
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
    //Segunda conta na transferêrencia (Tem o valor do balance nele)
    getAccount2() {
        return this.account2;
    }
    setAccount2(newBalance) {
        this.account2 = newBalance;
    }
    //Listar todas as contas
    listAll() {
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            const element2 = this.userDb[index];
            console.log(`\n${element2.getName()} \n${element.getSocialNumber()} \n${element.getBalance()}`);
        }
    }
    //Quando for logar e quiser ver o saldo.
    listBalance(cpf) {
        let y = 0;
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            const element2 = this.userDb[index];
            if (cpf == element.getSocialNumber()) {
                console.log(`\n ${element.getName()} \n ${element.getBalance()} \n ${element.getSocialNumber()}`);
                this.acessBalance = element.getBalance();
                this.accessName = element2.getName();
                this.accessSocialNumber = element.getSocialNumber();
            }
            else {
                y++;
            }
            ;
        }
        if (y >= this.accountDb.length) {
            console.log("Not found");
        }
        else {
            this.acessKey = true;
        }
    }
    //Muda os valores que foram alterados pelo Withdraw e deposit no Banco de dados
    changeDb(cpf) {
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            if (cpf == element.getSocialNumber()) {
                element.setBalance(this.acessBalance);
            }
        }
    }
    //Recupero os valores da conta que será tranferida  (recupero apenas o Balance no momento).
    getAccountToTransference(cpf) {
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            if (cpf == element.getSocialNumber()) {
                this.account2 = element.getBalance();
            }
        }
    }
    //Mudar os valores da tranferência no banco de dados.
    changeTransferenceDb(cpf, cpf2) {
        //Muda valor na primeira conta
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            if (cpf == element.getSocialNumber()) {
                element.setBalance(this.acessBalance);
            }
        }
        //Muda valor na segunda conta
        for (let index = 0; index < this.accountDb.length; index++) {
            const element = this.accountDb[index];
            if (cpf2 == element.getSocialNumber()) {
                element.setBalance(this.account2);
            }
        }
    }
}
exports.default = Database;
