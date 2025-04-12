import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";

export default class UserLogin {
      private prompt = PromptSync();
      private control: MainController;
    
        public constructor(control: MainController){
            this.control = control
        }
    
        public enterLogin(){
            //Perguntando ao usuário o Cpf
            let cpf: string = this.prompt("\nWhat is your social number?");
            let nCpf: number = Number(cpf);
            //Vou listar o saldo
            this.control.db.listBalance(nCpf);
        }
}