"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    // constructor(name: string, socialNumber: number, balance: number){
    //     this.name = name;
    //     this.socialNumber = socialNumber;
    //     this.balance = balance;
    // }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getSocialNumber() {
        return this.socialNumber;
    }
    setSocialNumber(socialNumber) {
        this.socialNumber = socialNumber;
    }
    getBalance() {
        return this.balance;
    }
    setBalance(balance) {
        this.balance = balance;
    }
}
exports.default = User;
