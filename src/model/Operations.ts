import MainController from "../controller/MainController";


export default class Operations {
    private control: MainController;
    private status: StatusTransference;

    public constructor(control: MainController, status: StatusTransference){
        this.control = control;
        this.status = status;
    }


    public deposit(amount: number){
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() + amount);
        console.log("Balance:" + this.control.db.getAcessBalance())
    }

    public withdraw(amount: number){
        this.control.db.setAcessBalance(this.control.db.getAcessBalance() - amount);
        console.log("Balance:" + this.control.db.getAcessBalance())
    }

    public transference(amount: number){
        let account1: number = this.control.db.getAcessBalance();

        this.control.db.setAcessBalance(account1 - amount);
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);

    }

    public statusName(name: string){
        if(name.length > 6){
            this.status = StatusTransference.Completed
        }else{
            this.status = StatusTransference.Processing
        }
        console.log(this.status);
    }

    public statusCpf(cpf: number){
        if(cpf === 11){
            this.status = StatusTransference.Completed
        }else{
            this.status = StatusTransference.Pendent
        }
        console.log(this.status);
    }
}