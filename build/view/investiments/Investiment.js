"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const InvestAbstract_1 = __importDefault(require("../../model/abstract_class/InvestAbstract"));
class Investiment extends InvestAbstract_1.default {
    constructor(porcentagemLucro, successRating, control) {
        super(porcentagemLucro, successRating);
        this.prompt = (0, prompt_sync_1.default)();
        this.control = control;
    }
    investiment() {
        // Gerar um número aleatório entre 0 e 1 para a porcentagem de lucro.
        let porcentagemValor = Math.random();
        // Arredondar o número para uma casa decimal.
        this.porcentagemLucro = Number(porcentagemValor.toFixed(1));
        // Gerar um número aleatório entre 0 e 1 para a taxa de sucesso.
        this.successRating = Math.random();
        //Pega o saldo atual.
        let saldo = this.control.db.getAcessBalance();
        // Pede ao usuário o valor que ele quer investir.
        let amountGamble = this.prompt("How much do you want to invest?");
        let nAmountGamble = Number(amountGamble); // Transformando a string em número.
        // Verificar se existe saldo suficiente.
        if (nAmountGamble > saldo) {
            console.log("Invalid");
            throw new Error("Insufficient funds");
        }
        else {
            // Se sim, verifica se o investimento foi bem sucedido.
            if (this.successRating < 0.4) {
                // Se não, atualiza o saldo com o investimento.
                this.control.db.setAcessBalance(saldo - nAmountGamble);
                console.log("Investiment failed!");
            }
            else {
                // Se sim, atualiza o saldo com o investimento e o lucro.  
                this.control.db.setAcessBalance(saldo + (nAmountGamble * this.porcentagemLucro));
                console.log("Investiment was a success!");
            }
            // Valor pós o investimento ser concluido.
            console.log(this.control.db.getAcessBalance());
        }
    }
}
exports.default = Investiment;
