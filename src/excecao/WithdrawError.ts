export default class WithdrawError extends Error {

    constructor(s: any, currentFunds: number){
        super(s + "Current Balance: " + currentFunds);
    }
}