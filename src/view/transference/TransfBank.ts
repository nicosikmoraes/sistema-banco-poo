import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";

export default class TransferenceSameBank {

            protected control: MainController;
            public prompt = PromptSync();
            protected nCpf2!: number;
    
            public constructor(control: MainController){
                this.control = control;
            }
               
            public getCpf2(){
                return this.nCpf2;
            }

        
    public transferenceMoney(){
        let cpf2: string = this.prompt("Which account do you want to transfer the money?")
        this.nCpf2 = Number(cpf2)

        this.control.db.getAccountToTransference(this.nCpf2);

       let amount: string = this.prompt("How much do you want to transfer?")
       let nAmount: number = Number(amount);

        this.control.operations.transference(nAmount);
    }

}
