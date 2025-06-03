export default class WithdrawError extends Error {

    constructor(currentFunds: number){
        super("Insufficient funds | Current Balance: " + currentFunds);
    }
}