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

        public getCpf2(){
            return this.trasferenceSameBank.getCpf2();
        }

        
        public transferenceChoice(){
            let continuing: boolean = true;
            while (continuing) {

                let choice = parseInt(this.prompt("\n1. Bank Manco \n2. Other bank"));
                switch (choice) {
                    case 1:
                        //Chamando a classe de Transference do mesmo banco
                        this.trasferenceSameBank.transferenceMoney();
                 
                        continuing = false;
                        break;
                            
                    case 2:
                    //Chamando a classe de Transference de outro banco
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
