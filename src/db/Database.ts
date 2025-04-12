import User from "../model/User";

export default class Database {
    private userDb: User[] = [];

    
//Adicionando ao banco de dados o usuário.
    public addNewUser(user: User){
        this.userDb.push(user);
        console.log("\nRegistrado com sucesso!");
    }

    public getUser(index: number){
        return this.userDb[index];
    }


    //Quando for logar e quiser ver o saldo.
    public listBalance(cpf: number){
        let y: number = 0;
        for(let index = 0; index <= this.userDb.length; index++){
            const element = this.userDb[index];
            if(cpf == element.getSocialNumber()){
                    console.log(`\n ${element.getName} \n ${element.getBalance} \n ${element.getSocialNumber}`)
            }else{y++;};
        }
            if(y >= this.userDb.length){
                    console.log("Not found")
            }
       
    }
}