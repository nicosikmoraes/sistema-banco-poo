import User from "./User";

export default class Conta extends User {
    private balance!: number;

    public getBalance(){
        return this.balance;
    }

    public setBalance(balance: number){
        this.balance = balance;
    }

}