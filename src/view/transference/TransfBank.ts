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
        // Pede ao usuário o CPF da conta para a qual ele quer transferir o dinheiro.
        let cpf2: string = this.prompt("Which account do you want to transfer the money?")
        this.nCpf2 = Number(cpf2) //Transformando a string em número.

        // Pega as informações da conta para a qual ele quer transferir o dinheiro.
        this.control.db.getAccountToTransference(this.nCpf2);

        // Pede ao usuário o valor que ele quer transferir.
        let amount: string = this.prompt("How much do you want to transfer?")
        let nAmount: number = Number(amount); //Transformando a string em número.

        // Chama a operação de transferência.
        this.control.operations.transference(nAmount);
    }

}
