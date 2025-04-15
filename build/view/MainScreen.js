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
            let choice = parseInt(this.prompt("Select: \n1. Register \n2. Login \n3. List \n4. Quit \n"));
            switch (choice) {
                case 1:
                    this.userRegister.addUser();
                    break;
                case 2:
                    this.userLogin.enterLogin();
                    break;
                case 3:
                    this.control.db.listAll();
                    break;
                case 4:
                    continuing = false;
                    break;
                default:
                    console.log("Invalid");
                    break;
            }
        }
        console.log("Exit");
    }
}
exports.default = MainScreen;
