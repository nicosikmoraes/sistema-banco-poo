import MainController from "../controller/MainController";
import { OtherBank } from "../model/OtherBank";
import TransferenceSameBank from "./TransfBank";

export default class TransferenceOtherBank extends TransferenceSameBank {
    private bankInfo: OtherBank;
    private name!: string
    private numCpf!: number

    public constructor(control: MainController, bankInfo: OtherBank){
        super(control); 
        this.bankInfo = bankInfo
    }

    //Sobrescrita
    public transferenceMoney(){

        //Injeção de dependências por meio de uma Interface (OtherBank)
       this.bankInfo.name = this.prompt("What is the name of the bank?");
       this.bankInfo.money = this.prompt("What is the coin that you want to transfer?");

       let cpf: string = this.prompt("if you know what is the Social Number of the account?");
       this.numCpf = Number(cpf);
       
       this.name= this.prompt("If you don't, what is the full name of who you want make the transition?");

       let amount: string = this.prompt("How much do you want to transfer?");
       let nAmount: number = Number(amount);

        this.control.operations.withdraw(nAmount);
        this.checkStringNumber(this.numCpf, this.name);
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
    cpfOrName(name: string): void;

    cpfOrName(param: any): void{
        if (typeof param === "number") {
            this.control.operations.statusCpf(this.numCpf);
        }else if(typeof param === "string"){
            this.control.operations.statusName(this.name);
        }
    }

    
}
