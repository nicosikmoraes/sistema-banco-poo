"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const InvestAbstract_1 = __importDefault(require("../model/InvestAbstract"));
class Investiment extends InvestAbstract_1.default {
    constructor(porcentagemLucro, successRating, control) {
        super(porcentagemLucro, successRating);
        this.control = control;
    }
    investiment() {
        this.porcentagemLucro = Math.random();
        this.successRating = Math.random();
        if (this.successRating < 0.5) {
            this.control.db.setAcessBalance(0);
        }
        else {
            this.control.db.setAcessBalance(this.control.db.getAcessBalance() + (this.control.db.getAcessBalance() * this.porcentagemLucro));
        }
    }
}
exports.default = Investiment;
