import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";

export default class Withdraw {
    private prompt = PromptSync();
    private control: MainController;
    private newBalance!: number;

    public constructor(control: MainController){
        this.control = control;
    }

    //Método para ter acesso ao novo saldo após o saque.
    public getNewBalance(){
        return this.newBalance;
    }

    public withdrawMoney(){
        //Pede ao usuário o valor que ele quer saque.
        let amount:string = this.prompt("\nHow much do you want to withdraw?");
        let nAmount: number = Number(amount);

        //Chama a operação de saque no controller.
        this.control.operations.withdraw(nAmount)
    }
}

