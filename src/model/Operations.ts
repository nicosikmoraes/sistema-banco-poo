import MainController from "../controller/MainController";


export default class Operations {
    private control: MainController;

    public constructor(control: MainController){
        this.control = control
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
}