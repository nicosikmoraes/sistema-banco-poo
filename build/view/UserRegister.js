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
        let user = this.control.getNewUser();
        //Pedir ao usuário seus dados de registro.
        let name = this.prompt("\nName:\n");
        let SocialNumber = this.prompt("\nSocial number:\n", "");
        var NSocialNumber = Number(SocialNumber);
        let balance = this.prompt("\nFirst deposit:\n", "");
        var NBalance = Number(balance);
        //Populando o objeto.
        user.setName(name);
        user.setSocialNumber(NSocialNumber);
        user.setBalance(NBalance);
        //Armazenar no banco de dados.
        this.control.db.addNewUser(user);
        console.log(user);
    }
}
exports.default = UserRegister;
