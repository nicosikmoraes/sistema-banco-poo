import MainController from "../controller/MainController";
import TransferenceSameBank from "./TransfBank";

export default class TransferenceOtherBank extends TransferenceSameBank {

    public constructor(control: MainController){
        super(control)
    }

    //Sobrescrita
    public transferenceMoney(){

        let bankName: string = this.prompt("What is the name of the bank?");

       let cpf: string = this.prompt("if you know what is the Social Number of the account?")
       let ncpf = Number(cpf);
       
       let name: string = this.prompt("If you don't, what is the full name of who you want make the transition?");

       let amount: string = this.prompt("How much do you want to transfer?");
       let nAmount: number = Number(amount);

        this.control.operations.withdraw(nAmount);
        this.checkStringNumber(ncpf, name);
    }


    public checkStringNumber(ncpf: number, name:string){
        if(ncpf === 0){
            this.cpfOrName(name);
        }else{
            this.cpfOrName(ncpf);
        }
    }

    //Confirmação da sobrecaga
    cpfOrName(cpf: number,): void;
    cpfOrName( name: string): void;

    cpfOrName(param: any): void{
        if (typeof param === "number") {
            console.log("Cpf encontrado!");
        }else if(typeof param === "string"){
            console.log("Nome encontrado!");
        }
    }

    
}