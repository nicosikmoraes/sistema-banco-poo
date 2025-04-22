import PromptSync from "prompt-sync";
import MainController from "../controller/MainController"
import TransferenceSameBank from "./TransfBank";
import TransferenceOtherBank from "./TranfOtherBank";


export default class Transference {
        protected control: MainController
        public prompt = PromptSync();
        private trasferenceSameBank: TransferenceSameBank
        private transferenceOtherBank: TransferenceOtherBank;

        public constructor(control: MainController){
            this.control = control;
            this.transferenceOtherBank = new TransferenceOtherBank(control)
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
                        this.trasferenceSameBank.transferenceMoney();
                    continuing = false;
                        break;
                            
                    case 2:
                        this.transferenceOtherBank.transferenceMoney();
                    continuing = false;
                        break;
                
                    default: 
                        console.log("Invalid.")
                        break;
                }
             }
             console.log(this.getCpf2())
        }
    

}
