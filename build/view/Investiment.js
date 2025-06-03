"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const InvestAbstract_1 = __importDefault(require("../model/InvestAbstract"));
class Investiment extends InvestAbstract_1.default {
    constructor(porcentagemLucro, successRating, control) {
        super(porcentagemLucro, successRating);
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    investiment() {
        let porcentagemValor = Math.random();
        this.porcentagemLucro = Number(porcentagemValor.toFixed(1));
        this.successRating = Math.random();
        let saldo = this.control.db.getAcessBalance();
        let amountGamble = this.prompt("Digite quantidade que deseja apostar:");
        let nAmountGamble = Number(amountGamble);
        // Verificar se existe saldo suficiente.
        if (nAmountGamble > saldo) {
            console.log("Valor inválido");
            throw new Error("Insufficient funds");
        }
        else {
            if (this.successRating < 0.4) {
                this.control.db.setAcessBalance(saldo - nAmountGamble);
                console.log("Investimento mal sucedido!");
            }
            else {
                this.control.db.setAcessBalance(saldo + (nAmountGamble * this.porcentagemLucro));
                console.log("Investimento bem sucedido!");
            }
            // Valor pós o investimento ser concluido.
            console.log(this.control.db.getAcessBalance());
        }
    }
}
exports.default = Investiment;
