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
        //Estou criando um novo User e uma nova conta. (Sâo criados usando Tipos Genéricos na classe GenericController)
        let user: User = this.control.getNewUser();
        let conta: Conta = this.control.getNewAccount();

        //Pede ao usuário os dados para registro.
        let name: string = this.prompt("\nName:\n");
        let SocialNumber: string = this.prompt("\nSocial number:\n", "");
        var NSocialNumber = Number(SocialNumber)  //Transformando a string em número.
        let balance: string = this.prompt("\nFirst deposit:\n", "");
        var NBalance = Number(balance) //Transformando a string em número.

        //Populando o objeto.
        user.setName(name);
        user.setSocialNumber(NSocialNumber);
        conta.setSocialNumber(NSocialNumber);
        conta.setBalance(NBalance);
        
        //Armazenar no banco de dados.
        this.control.db.addNewUser(user);
        this.control.db.addNewAcount(conta);
        console.log(user);
        console.log(conta);
    }
}