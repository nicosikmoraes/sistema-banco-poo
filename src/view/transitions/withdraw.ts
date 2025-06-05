import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";

export default class Withdraw {
    private prompt = PromptSync();
    private control: MainController;
    private newBalance!: number;

    public constructor(control: MainController){
        this.control = control;
    }

    public getNewBalance(){
        return this.newBalance;
    }

    public withdrawMoney(){
        let amount:string = this.prompt("\nHow much do you want to withdraw?");
        let nAmount: number = Number(amount);
        this.control.operations.withdraw(nAmount)
    }
}

