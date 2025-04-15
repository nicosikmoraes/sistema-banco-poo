import User from "../model/User";

export default class Database {
    private userDb: User[] = [];
    public acessKey: boolean = false;
    private acessBalance!: number;
    private accessName!: string;
    private accessSocialNumber!: number;

    
//Adicionando ao banco de dados o usuário.
    public addNewUser(user: User){
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }

    public getUser(index: number){
        return this.userDb[index];
    }

    public getAcessBalance(){
        return this.acessBalance;
    }

    public setAcessBalance(newBalance: number){
        this.acessBalance = newBalance
    }

    public getAcessName(){
        return this.accessName;
    }

    public getAcessSocialNumber(){
        return this.accessSocialNumber;
    }


    public listAll(){
        for (let index = 0; index < this.userDb.length; index++) {
            const element = this.userDb[index];
                console.log(`\n${element.getName()} \n${element.getSocialNumber()} \n${element.getBalance()}`)
        }
    }

    //Quando for logar e quiser ver o saldo.
    public listBalance(cpf: number){
        let y: number = 0;
        for(let index = 0; index < this.userDb.length; index++){
            const element = this.userDb[index];
            if(cpf == element.getSocialNumber()){
                    console.log(`\n ${element.getName()} \n ${element.getBalance()} \n ${element.getSocialNumber()}`)
                    this.acessBalance = element.getBalance();
                    this.accessName = element.getName();
                    this.accessSocialNumber = element.getSocialNumber();
            }else{y++;};
        }
            if(y >= this.userDb.length){
                    console.log("Not found")
            }else{
                this.acessKey = true
            }
       
    }

}