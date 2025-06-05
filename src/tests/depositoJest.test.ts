import MainController from "../controller/MainController";
import Operations from "../model/Operations";

const control = new MainController();
let deposito = new Operations(control);
test("Teste do depósito", () => {
        expect(deposito.deposit(0)).toBe(100);});
