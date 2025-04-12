import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import User from "../model/User";

export default class UserRegister {
    private prompt = PromptSync();
    private control: MainController;

    public constructor(control: MainController){
        this.control = control
    }

    public addUser(){
        //Esse user é basicamente as informações do meu User.ts
        let user: User = this.control.getNewUser();
        //Pedir ao usuário seus dados de registro.
        let name: string = this.prompt("\nName:\n");
        let SocialNumber: string = this.prompt("\nSocial number:\n", "");
        var NSocialNumber = Number(SocialNumber)
        let balance: string = this.prompt("\nFirst deposit:\n", "");
        var NBalance = Number(balance)
        //Populando o objeto.
        user.setName(name);
        user.setSocialNumber(NSocialNumber);
        user.setBalance(NBalance);
        //Armazenar no banco de dados.
        this.control.db.addNewUser(user)
        console.log(user);
    }
}