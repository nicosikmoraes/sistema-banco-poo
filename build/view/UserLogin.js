"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class UserLogin {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    enterLogin() {
        //Perguntando ao usuário o Cpf
        let cpf = this.prompt("\nWhat is your social number?");
        let nCpf = Number(cpf);
        //Vou listar o saldo
        this.control.db.listBalance(nCpf);
    }
}
exports.default = UserLogin;
