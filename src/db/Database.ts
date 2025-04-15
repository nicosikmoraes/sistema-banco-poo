import User from "../model/User";

export default class Database {
    private userDb: User[] = [];
    public acessKey: boolean = false;
    private acessBalance!: number;
    private accessName!: string;
    private accessSocialNumber!: number;
    private account2 !: number;

    
    //Adicionando ao banco de dados o usuário.
    public addNewUser(user: User){
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }

    //Informações do usuário
    public getUser(index: number){
        return this.userDb[index];
    }

    //Valores da conta acessada no login
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

    //Segunda conta na transferêrencia (Tem o valor do balance nele)
    public getAccount2(){
        return this.account2;
    }

    public setAccount2(newBalance: number){
        this.account2 = newBalance
    }

    //Listar todas as contas
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

    //Muda os valores que foram alterados pelo Withdraw e deposit no Banco de dados
    public changeDb(cpf: number){
        for(let index = 0; index < this.userDb.length; index++){
            const element = this.userDb[index];
            if(cpf == element.getSocialNumber()){
                element.setBalance(this.acessBalance);
            }
    }
}

    //Recupero os valores da conta que será tranferida  (recupero apenas o Balance no momento).
    public getAccountToTransference(cpf: number){
        for(let index = 0; index < this.userDb.length; index++){
            const element = this.userDb[index];
            if(cpf == element.getSocialNumber()){
                this.account2 = element.getBalance();
            }
        }
    }

    public changeTransferenceDb(cpf: number, cpf2:number){
        //Muda valor na primeira conta
        for(let index = 0; index < this.userDb.length; index++){
            const element = this.userDb[index];
            if(cpf == element.getSocialNumber()){
                element.setBalance(this.acessBalance);
            }
    }
            //Muda valor na segunda conta
            for(let index = 0; index < this.userDb.length; index++){
                const element = this.userDb[index];
                if(cpf2 == element.getSocialNumber()){
                    element.setBalance(this.account2);
                }
        }
    }
}