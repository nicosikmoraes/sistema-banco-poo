import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Withdraw from "./withdraw";
import MainScreen from "./MainScreen";

export default class UserLogin {
      private prompt = PromptSync();
      private control: MainController;
      private withdraw: Withdraw;
  
    
        public constructor(control: MainController){
            this.control = control
            this.withdraw = new Withdraw(control)

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

                let choice = parseInt(this.prompt("\nBalance: "+this.control.db.getAcessBalance()+"\nSelect: \n1. Withdraw \n2. Depositar \n3. Transferir \n4. Info \n5. Sair \n"));
                switch (choice) {
                    case 1:
                            this.withdraw.withdrawMoney();
                        break;

                    case 4:
                            console.log(this.control.db.getAcessName());
                            console.log(this.control.db.getAcessSocialNumber());
                            console.log(this.control.db.getAcessBalance());
                        break;


                    case 5:
                        this.control.db.changeDb(nCpf);
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