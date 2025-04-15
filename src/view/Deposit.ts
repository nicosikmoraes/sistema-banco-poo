import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

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

    public depositMoney(){
        let amount:string = this.prompt("\nHow much do you want to deposit?");
        let nAmount: number = Number(amount);
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() + nAmount);
        console.log("Balance:" + this.control.db.getAcessBalance())
    }
}
