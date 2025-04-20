import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Withdraw from "./withdraw";
import MainScreen from "./MainScreen";
import Deposit from "./Deposit";
import Transference from "./Transference";

export default class UserLogin {
      private prompt = PromptSync();
      private control: MainController;
      private withdraw: Withdraw;
      private deposit: Deposit;
      private transference: Transference;
  
        public constructor(control: MainController){
            this.control = control;
            this.withdraw = new Withdraw(control);
            this.deposit = new Deposit(control);
            this.transference = new Transference(control);
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

                let choice = parseInt(this.prompt("\nBalance: "+this.control.db.getAcessBalance()+"\nSelect: \n1. Withdraw \n2. Deposit \n3. transference \n4. Info \n5. Sair \n"));
                switch (choice) {
                    case 1:
                            this.withdraw.withdrawMoney();
                            this.control.db.changeDb(nCpf);
                        break;

                    case 2:
                            this.deposit.depositMoney();
                            this.control.db.changeDb(nCpf);
                        break;

                    case 3:
                            this.transference.transferenceChoice();
                            this.control.db.changeTransferenceDb(nCpf, this.transference.getCpf2())
                        break;

                    case 4:
                            console.log(this.control.db.getAcessName());
                            console.log(this.control.db.getAcessSocialNumber());
                            console.log(this.control.db.getAcessBalance());
                        break;


                    case 5:
                        continuing = false;
                        break;
                
                    default:
                        console.log("Invalid.")
                        break;
                }
            }
            console.log("Exit")
            console.log(this.transference.getCpf2() + " cpf2")
        }
        }
}