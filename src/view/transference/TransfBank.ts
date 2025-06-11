import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";

export default class TransferenceSameBank {

            protected control: MainController;
            public prompt = PromptSync();
            protected nCpf2!: number;
    
            public constructor(control: MainController){
                this.control = control;
            }
               
            // Método para acessar ao CPF da outra conta.
            public getCpf2(){
                return this.nCpf2;
            }

        
    public transferenceMoney(){
        //Pede ao usuário o Social Number (CPF) da conta que ele quer transferir.
        let cpf2: string = this.prompt("Which account do you want to transfer the money?")
        this.nCpf2 = Number(cpf2) //Transformando a string em número.

        //Pego a conta que vou transferir do meu banco de dados.
        this.control.db.getAccountToTransference(this.nCpf2);

       //Pede ao usuário o valor que ele quer transferir.
       let amount: string = this.prompt("How much do you want to transfer?")
       let nAmount: number = Number(amount); //Transformando a string em número.

        // Chama a operação de transferência.
        this.control.operations.transference(nAmount);
    }

}
