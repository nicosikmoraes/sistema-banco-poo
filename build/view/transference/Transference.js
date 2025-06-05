"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const TransfBank_1 = __importDefault(require("./TransfBank"));
const TranfOtherBank_1 = __importDefault(require("./TranfOtherBank"));
const Message_1 = __importDefault(require("../../model/messages/Message"));
class Transference {
    constructor(control) {
        this.prompt = (0, prompt_sync_1.default)();
        this.mensagem = new Message_1.default;
        this.control = control;
        this.transferenceOtherBank = new TranfOtherBank_1.default(control, this.mensagem);
        this.trasferenceSameBank = new TransfBank_1.default(control);
    }
    getCpf2() {
        return this.trasferenceSameBank.getCpf2();
    }
    transferenceChoice() {
        let continuing = true;
        while (continuing) {
            let choice = parseInt(this.prompt("\n1. Bank Manco \n2. Other bank"));
            switch (choice) {
                case 1:
                    this.trasferenceSameBank.transferenceMoney();
                    continuing = false;
                    break;
                case 2:
                    this.transferenceOtherBank.transferenceMoney();
                    continuing = false;
                    break;
                default:
                    console.log("Invalid.");
                    break;
            }
        }
    }
}
exports.default = Transference;
