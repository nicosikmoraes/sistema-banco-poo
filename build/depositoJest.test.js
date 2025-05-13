"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainController_1 = __importDefault(require("./controller/MainController"));
const Operations_1 = __importDefault(require("./model/Operations"));
const teste_1 = __importDefault(require("./model/teste"));
const control = new MainController_1.default();
let deposito = new Operations_1.default(control);
let double = new teste_1.default();
test("Teste do depósito", () => {
    expect(deposito.deposit(0)).toBe(100);
});
test("teste básico", () => {
    expect(double.getDouble(2)).toBe(4);
});
