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
            if(this.control.db.acessKey == true){
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("\nBalance: "+this.control.db.getAcessBalance()+"\nSelect: \n1. Sacar \n2. Depositar \n3. Transferir \n4. Sair \n"));
                switch (choice) {
                    case 1:
                          console.log("Sacar")  ;
                        break;


                    case 4:
                        continuing = false;
                        break;
                
                    default:
                        console.log("Invalid.")
                        break;
                }
            }
            console.log("Exit")
        }
        }
}