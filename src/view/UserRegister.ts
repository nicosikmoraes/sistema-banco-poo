import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import User from "../model/User";
import Conta from "../model/Conta";

export default class UserRegister {
    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController){
        this.control = control
    }

    public addUser(){
        //Esse user é basicamente as informações do meu User.ts
        let user: User = this.control.genericController.getNew("User")
        
        //Esse conta é basicamente as informações do meu Conta.ts
        let conta: Conta = this.control.genericController.getNew("Conta")

        //Pedir ao usuário seus dados de registro.
        let name: string = this.prompt("\nName:\n");
        let SocialNumber: string = this.prompt("\nSocial number:\n", "");
        var NSocialNumber = Number(SocialNumber)
        let balance: string = this.prompt("\nFirst deposit:\n", "");
        var NBalance = Number(balance)
        
        //Populando o objeto.
        user.setName(name);
        user.setSocialNumber(NSocialNumber);
        conta.setSocialNumber(NSocialNumber);
        conta.setBalance(NBalance);
        
        //Armazenar no banco de dados.
        this.control.db.addNewUser(user);
        this.control.db.addNewAcount(conta);
        
        //Mostrar os dados do usuário e conta.
        console.log(user);
        console.log(conta);
    }
}