"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.userDb = [];
    }
    //Adicionando ao banco de dados o usuário.
    addNewUser(user) {
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }
    getUser(index) {
        return this.userDb[index];
    }
    //Quando for logar e quiser ver o saldo.
    listBalance(cpf) {
        let y = 0;
        for (let index = 0; index <= this.userDb.length; index++) {
            const element = this.userDb[index];
            if (cpf == element.getSocialNumber()) {
                console.log(`\n ${element.getName} \n ${element.getBalance} \n ${element.getSocialNumber}`);
            }
            else {
                y++;
            }
            ;
        }
        if (y >= this.userDb.length) {
            console.log("Not found");
        }
    }
}
exports.default = Database;
