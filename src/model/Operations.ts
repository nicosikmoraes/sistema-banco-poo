import MainController from "../controller/MainController";
import { StatusTransference } from "../enum/StatusEnum";
import WithdrawError from "../exception/WithdrawError";


export default class Operations{
    private control: MainController;
    private status: StatusTransference = StatusTransference.Pending;

    public constructor(control: MainController){
        this.control = control;

    }


    public deposit(amount: number){
        // Pega o saldo atual.
        let saldo = this.control.db.getAcessBalance();

        // Atualiza o saldo com o depósito.
        this.control.db.setAcessBalance(saldo + amount);

        // Mostra o saldo atual.
        console.log("Balance:" + saldo);
        return saldo;
    }

    public withdraw(amount: number){
        // Pega o saldo atual.
        let saldo = this.control.db.getAcessBalance();

        // Verifica se o saldo é suficiente.
        if(saldo < amount){
            // Se não, exibe uma mensagem de erro.
            console.log( "insufficient funds, you need to deposit: " + (amount - saldo));
            throw new WithdrawError(saldo);
            
        }else{
            // Se sim, atualiza o saldo com o saque.
            this.control.db.setAcessBalance(saldo - amount);
            console.log("Balance:" + this.control.db.getAcessBalance())
        }
    }

    public transference(amount: number){
        // Pega o saldo atual.
        let account1: number = this.control.db.getAcessBalance();

        //Atualiza o saldo da conta 1.
        this.control.db.setAcessBalance(account1 - amount);

        //Atualiza o saldo da conta 2.
        this.control.db.setAccount2(this.control.db.getAccount2() + amount);

    }

    // Muda o status da transferência.
    mudaStatus(newStatus: StatusTransference){
        this.status = newStatus
    }

    // Verifica o status da transferência.
    public statusName(name: string){
        // Verifica se o nome é maior que 6 caracteres.
        if(name.length > 6){
            // Se sim, muda o status da transferência para concluída.
            this.mudaStatus(StatusTransference.Completed)
            console.log(this.status, ",nome encontrado")
        }
        else
        {
            // Se não, muda o status da transferência para em processamento.
            this.mudaStatus(StatusTransference.Processing)
            console.log(this.status)
        }
    }

    // Verifica o status do CPF.
    public statusCpf(cpf: number){
        // Verifica se o CPF é 11.
        if(cpf === 11){
            // Se sim, muda o status da transferência para concluída.
            this.mudaStatus(StatusTransference.Completed)
            console.log(this.status, ",cpf encontrado")
        }
        else
        {
            // Se não, muda o status da transferência para pendente.
            this.mudaStatus(StatusTransference.Pending)
            console.log(this.status)
        }

    }

        // Método para mostrar uma mensagem de sucesso.
    completedMesage(name: string, money: number): void{
        console.log(`Transference completed, ${money}$ to the ${name} bank`);
    }


}