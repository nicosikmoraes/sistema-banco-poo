import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController"
import TransferenceSameBank from "./TransfBank";
import TransferenceOtherBank from "./TranfOtherBank";
import Message from "../../model/messages/Message";


export default class Transference {
        protected control: MainController
        public prompt = PromptSync();
        private trasferenceSameBank: TransferenceSameBank
        private transferenceOtherBank: TransferenceOtherBank;
        public mensagem = new Message;

        public constructor(control: MainController){
            this.control = control;
            this.transferenceOtherBank =  new TransferenceOtherBank(control, this.mensagem);
            this.trasferenceSameBank = new TransferenceSameBank(control)
        }

        // Método para acessar ao cpf da outra conta.
        public getCpf2(){
            return this.trasferenceSameBank.getCpf2();
        }

        
        public transferenceChoice(){
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("\n1. Bank Manco \n2. Other bank"));
                switch (choice) {
                    case 1:
                        //Chama o método de transferência (Transference). Transfere para uma conta desse sistema
                        this.trasferenceSameBank.transferenceMoney();
                    
                        continuing = false;
                        break;
                            
                    case 2:
                        //Chama o método de transferência para outro banco. Simula uma transferência para outro banco.
                        this.transferenceOtherBank.transferenceMoney();
                    
                        continuing = false;
                        break;
                
                    default: 
                        console.log("Invalid.")
                        break;
                }
             }
        }
    

}
