import MainController from "./controller/MainController";
import Operations from "./model/Operations";
import Testes from "./model/teste";

const control = new MainController();
let deposito = new Operations(control);
let double = new Testes()
test("Teste do depósito", () => {
        expect(deposito.deposit(0)).toBe(100);});

test("teste básico", () => {
        expect(double.getDouble(2)).toBe(4)});