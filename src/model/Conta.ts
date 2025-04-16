import User from "./User";

export default class Conta extends User {
    private balance!: number;
    private SocialNumber = this.getSocialNumber();

    public getSocialNumber(): number {
        return this.SocialNumber
    }

    public getBalance(){
        return this.balance;
    }

    public setBalance(balance: number){
        this.balance = balance;
    }
}