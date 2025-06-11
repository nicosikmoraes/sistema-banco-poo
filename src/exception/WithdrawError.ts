export default class WithdrawError extends Error {
    //Erro personalizado.

    constructor(currentFunds: number){
        super("Insufficient funds | Current Balance: " + currentFunds);
    }
}