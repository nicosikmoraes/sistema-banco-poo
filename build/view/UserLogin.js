"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const withdraw_1 = __importDefault(require("./withdraw"));
const Deposit_1 = __importDefault(require("./Deposit"));
const Transference_1 = __importDefault(require("./Transference"));
class UserLogin {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
        this.withdraw = new withdraw_1.default(control);
        this.deposit = new Deposit_1.default(control);
        this.transference = new Transference_1.default(control);
    }
    enterLogin() {
        //Perguntando ao usuário o Cpf
        let cpf = this.prompt("\nWhat is your social number?");
        let nCpf = Number(cpf);
        //Vou listar o saldo
        this.control.db.listBalance(nCpf);
        if (this.control.db.acessKey == true) {
            let continuing = true;
            while (continuing) {
                let choice = parseInt(this.prompt("\nBalance: " + this.control.db.getAcessBalance() + "\nSelect: \n1. Withdraw \n2. Deposit \n3. transference \n4. Info \n5. Sair \n"));
                switch (choice) {
                    case 1:
                        this.withdraw.withdrawMoney();
                        this.control.db.changeDb(nCpf);
                        break;
                    case 2:
                        this.deposit.depositMoney();
                        this.control.db.changeDb(nCpf);
                        break;
                    case 3:
                        this.transference.transferenceChoice();
                        this.control.db.changeTransferenceDb(nCpf, this.transference.getCpf2());
                        break;
                    case 4:
                        console.log(this.control.db.getAcessName());
                        console.log(this.control.db.getAcessSocialNumber());
                        console.log(this.control.db.getAcessBalance());
                        break;
                    case 5:
                        continuing = false;
                        break;
                    default:
                        console.log("Invalid.");
                        break;
                }
            }
            console.log("Exit");
            console.log(this.transference.getCpf2() + " cpf2");
        }
    }
}
exports.default = UserLogin;
