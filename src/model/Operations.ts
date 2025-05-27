import MainController from "../controller/MainController";
import { StatusTransference } from "../enum/StatusEnum";
import WithdrawError from "../excecao/WithdrawError";


export default class Operations{
    private control: MainController;
    private status: StatusTransference = StatusTransference.Pending;

    public constructor(control: MainController){
        this.control = control;

    }


    public deposit(amount: number){
        let saldo = this.control.db.getAcessBalance();

        this.control.db.setAcessBalance(saldo + amount);
        console.log("Balance:" + saldo);
        return saldo;
    }

    public withdraw(amount: number){
        let saldo = this.control.db.getAcessBalance();

        if(saldo < amount){
            console.log( "insufficient funds, you need to deposit: " + (amount - saldo));
            throw new WithdrawError("insufficient funds", (amount - saldo));
            
        }else{
            this.control.db.setAcessBalance(saldo - amount);
            console.log("Balance:" + this.control.db.getAcessBalance())
        }
    }

    public transference(amount: number){
        let account1: number = this.control.db.getAcessBalance();

        this.control.db.setAcessBalance(account1 - amount);
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);

    }

    mudaStatus(newStatus: StatusTransference){
        this.status = newStatus
    }

    public statusName(name: string){
        if(name.length > 6){
            this.mudaStatus(StatusTransference.Completed)
            console.log(this.status, ",nome encontrado")
        }else{
            this.mudaStatus(StatusTransference.Processing)
            console.log(this.status)
        }
    }

    public statusCpf(cpf: number){
        if(cpf === 11){
            this.mudaStatus(StatusTransference.Completed)
            console.log(this.status, ",cpf encontrado")
        }else{
            this.mudaStatus(StatusTransference.Pending)
            console.log(this.status)
        }

    }

        //Erro
    completedMesage(name: string, money: number): void{
        console.log(`Transference completed, ${money}$ to the ${name} bank`);
    }


}