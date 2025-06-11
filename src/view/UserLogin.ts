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
            //Perguntando ao usuário o Social Number (CPF).
            let cpf: string = this.prompt("\nWhat is your social number?");
            let nCpf: number = Number(cpf); // Transformando a string em número.
            
            //lista o saldo
            this.control.db.listBalance(nCpf);

            //Confere se o usuário existe no banco de dados e se ele tem acesso.
            if(this.control.db.acessKey == true){

            //Se o usuário ter acesso, ele pode acessar as opções.    
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("\nBalance: "+this.control.db.getAcessBalance()+"\nSelect: \n1. Withdraw \n2. Deposit \n3. transference \n4. Info \n5. Investiment \n6. Risk Investiment \n7. Exit \n"));
                switch (choice) {
                    case 1:
                            //Chama o método de saque (Withdraw).
                            this.withdraw.withdrawMoney();

                            //Atualiza o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 2:
                            //Chama o método de depósito (Deposit).
                            this.deposit.depositMoney();

                            //Atualiza o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 3:
                            //Chama o método de transferência (Transference).
                            this.transference.transferenceChoice();

                            //Atualiza o banco de dados com o novo saldo de a,bas as contas.
                            this.control.db.changeTransferenceDb(nCpf, this.transference.getCpf2())

                            
                        break;

                    case 4:
                            //Mostra as informações do usuário.
                            console.log(this.control.db.getAcessName());
                            console.log(this.control.db.getAcessSocialNumber());
                            console.log(this.control.db.getAcessBalance());
                        break;

                    case 5:
                            //Chama o método de investimento (Investiment).
                            this.investiment.investiment();

                            //Atualiza o banco de dados com o novo saldo.
                            this.control.db.changeDb(nCpf);
                        break;

                    case 6:
                            //Chama o método de investimento de risco (RiskInvestiment).
                            this.riskInvestiment.investiment();

                            //Atualiza o banco de dados com o novo saldo.
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