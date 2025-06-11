import PromptSync from "prompt-sync";
import MainController from "../controller/MainController";
import Withdraw from "./transitions/withdraw";
import Deposit from "./transitions/Deposit";
import Transference from "./transference/Transference";
import Investiment from "./investiments/Investiment";
import RiskInvestiment from "./investiments/RiskInvestiment";

export default class UserLogin {
      private prompt = PromptSync();
      private control: MainController;
      private withdraw: Withdraw;
      private deposit: Deposit;
      private transference: Transference;
      private investiment: Investiment;
      private riskInvestiment: RiskInvestiment;
  
        public constructor(control: MainController){
            this.control = control;
            this.withdraw = new Withdraw(control);
            this.deposit = new Deposit(control);
            this.transference = new Transference(control);
            this.investiment = new Investiment(0, 0, control);
            this.riskInvestiment = new RiskInvestiment(0, 0, control);
        }
    
        public enterLogin(){
            //Perguntando ao usuário o Cpf
            let cpf: string = this.prompt("\nWhat is your social number?");
            let nCpf: number = Number(cpf); //Transformando a string em número.
            
            //Vou listar o saldo
            this.control.db.listBalance(nCpf);
            
            if(this.control.db.acessKey == true){
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("\nBalance: "+this.control.db.getAcessBalance()+"\nSelect: \n1. Withdraw \n2. Deposit \n3. transference \n4. Info \n5. Investiment \n6. Risk Investiment \n7. Exit \n"));
                switch (choice) {
                    case 1:
                            //Chamando a classe de Withdraw
                            this.withdraw.withdrawMoney();

                            //Atualizando o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 2:
                            //Chamando a classe de Deposit
                            this.deposit.depositMoney();

                            //Atualizando o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 3:
                            //Chamando a classe de Transference
                            this.transference.transferenceChoice();

                            //Atualizando o banco de dados com o novo saldo das duas contas.
                            this.control.db.changeTransferenceDb(nCpf, this.transference.getCpf2())
                        break;

                    case 4:
                            //Mostrando as informações do usuário.
                            console.log(this.control.db.getAcessName());
                            console.log(this.control.db.getAcessSocialNumber());
                            console.log(this.control.db.getAcessBalance());
                        break;

                    case 5:
                            //Chamando a classe de Investiment
                            this.investiment.investiment();

                            //Atualizando o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 6:
                            //Chamando a classe de RiskInvestiment
                            this.riskInvestiment.investiment();

                            //Atualizando o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 7:
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