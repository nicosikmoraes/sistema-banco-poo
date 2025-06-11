import MainController from "../controller/MainController";
import { StatusTransference } from "../enum/StatusEnum";
import WithdrawError from "../exception/WithdrawError";


export default class Operations{
    private control: MainController;
    private status: StatusTransference = StatusTransference.Pending;

    public constructor(control: MainController){
        this.control = control;

    }


    //Operações de depósito.
    public deposit(amount: number){
        //Pega o saldo atual do usuário.
        let saldo = this.control.db.getAcessBalance();

        //Atualiza o saldo do usuário.
        this.control.db.setAcessBalance(saldo + amount);

        //Mostra o saldo do usuário.
        console.log("Balance:" + saldo);
        return saldo;
    }

    //Operações de saque.
    public withdraw(amount: number){
        //Pega o saldo atual do usuário.
        let saldo = this.control.db.getAcessBalance();

        //Verifica se o saldo é suficiente.
        if(saldo < amount){
            console.log( "insufficient funds, you need to deposit: " + (amount - saldo));
            //Lança um erro personalizado se o saldo for insuficiente.
            throw new WithdrawError(saldo);
            
        } else {
            //Atualiza o saldo do usuário.
            this.control.db.setAcessBalance(saldo - amount);

            //Mostra o saldo do usuário.
            console.log("Balance:" + this.control.db.getAcessBalance())
        }
    }

    //Operações de transferência.
    public transference(amount: number){
        //Pega o saldo atual da conta 1 (Minha conta).
        let account1: number = this.control.db.getAcessBalance();

        //Atualiza o saldo da conta 1 (Minha conta).
        this.control.db.setAcessBalance(account1 - amount);

        //Atualiza o saldo atual da conta 2 (Conta para onde vou transferir).
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);

    }

    //Método para mudar o status da transferência.
    mudaStatus(newStatus: StatusTransference){
        this.status = newStatus
    }

    //Método para verificar se o nome foi encontrado.
    public statusName(name: string){
        //Verifica se o nome tem mais de 6 caracteres.
        if(name.length > 6){
            //Se o nome tiver mais de 6 caracteres, muda o status da transferência para "Completado".
            this.mudaStatus(StatusTransference.Completed)
            //Mostra o status da transferência e a mensagem de sucesso.
            console.log(this.status, ",nome encontrado")
        }else{
            //Se o nome tiver menos de 6 caracteres, muda o status da transferência para "Em processamento".
            this.mudaStatus(StatusTransference.Processing)
            console.log(this.status)
        }
    }

    //Método para verificar se o CPF foi encontrado.
    public statusCpf(cpf: number){
        //Verifica se o CPF tem 11 dígitos.
        if(cpf === 11){
            //Se o CPF tiver 11 dígitos, muda o status da transferência para "Completado".
            this.mudaStatus(StatusTransference.Completed)
            //Mostra o status da transferência e a mensagem de sucesso.
            console.log(this.status, ",cpf encontrado")
        }else{
            //Se o CPF tiver menos de 11 dígitos, muda o status da transferência para "Pendente".
            this.mudaStatus(StatusTransference.Pending)
            console.log(this.status)
        }

    }

    //Método para mostrar a mensagem de sucesso da transferência.
    completedMesage(name: string, money: number): void{
        console.log(`Transference completed, ${money}$ to the ${name} bank`);
    }


}