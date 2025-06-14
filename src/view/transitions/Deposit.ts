import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";

export default class Deposit{
    private prompt = PromptSync();
    private control: MainController;
    private newBalance!: number;

    public constructor(control: MainController){
        this.control = control;
    }

    public getNewBalance(){
        return this.newBalance;
    }

    //Método para ter acesso ao novo saldo após o depósito.
    public depositMoney(){
        //Pede ao usuário o valor que ele quer depositar.
        let amount:string = this.prompt("\nHow much do you want to deposit?");
        let nAmount: number = Number(amount); //Transformando a string em número.
        
        // Chama a operação de depósito.
        this.control.operations.deposit(nAmount);
    }
}
