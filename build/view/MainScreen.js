"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const UserRegister_1 = __importDefault(require("./UserRegister"));
const UserLogin_1 = __importDefault(require("./UserLogin"));
class MainScreen {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.userRegister = new UserRegister_1.default(control);
        this.userLogin = new UserLogin_1.default(control);
        // Vai rodar a tela principal quando for chamado eu acho.
        this.mainMenu();
    }
    //Tela principal
    mainMenu() {
        let continuing = true;
        while (continuing) {
            let choice = parseInt(this.prompt("Escolha: \n1. Criar conta \n2. Login \n3.Sair \n"));
            switch (choice) {
                case 1:
                    this.userRegister.addUser();
                    break;
                case 2:
                    this.userLogin.enterLogin();
                    break;
                case 3:
                    continuing = false;
                    break;
                default:
                    console.log("Valor inválido.");
                    break;
            }
        }
        console.log("Saiu");
    }
}
exports.default = MainScreen;
