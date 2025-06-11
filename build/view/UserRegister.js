"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class UserRegister {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    addUser() {
        //Esse user é basicamente as informações do meu User.ts
        let user = this.control.genericController.getNew("User");
        //Esse conta é basicamente as informações do meu Conta.ts
        let conta = this.control.genericController.getNew("Conta");
        //Pedir ao usuário seus dados de registro.
        let name = this.prompt("\nName:\n");
        let SocialNumber = this.prompt("\nSocial number:\n", "");
        var NSocialNumber = Number(SocialNumber);
        let balance = this.prompt("\nFirst deposit:\n", "");
        var NBalance = Number(balance);
        //Populando o objeto.
        user.setName(name);
        user.setSocialNumber(NSocialNumber);
        conta.setSocialNumber(NSocialNumber);
        conta.setBalance(NBalance);
        //Armazenar no banco de dados.
        this.control.db.addNewUser(user);
        this.control.db.addNewAcount(conta);
        //Mostrar os dados do usuário e conta.
        console.log(user);
        console.log(conta);
    }
}
exports.default = UserRegister;
