import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";
import InvestAbstract from "../../model/abstract_class/InvestAbstract";

export default class Investiment extends InvestAbstract {
    private control: MainController;
    public prompt = PromptSync();

constructor(porcentagemLucro: number, successRating: number,control: MainController){
    super(porcentagemLucro, successRating);
    this.control = control;
}

investiment(): void {
    // Gerar um número aleatório entre 0 e 1 para a porcentagem de lucro.
    let porcentagemValor = Math.random();
    // Arredondar o número para uma casa decimal.
    this.porcentagemLucro = Number(porcentagemValor.toFixed(1));

    // Gerar um número aleatório entre 0 e 1 para a taxa de sucesso.
    this.successRating = Math.random();

    //Pega o saldo atual.
    let saldo: number = this.control.db.getAcessBalance();

    // Pede ao usuário o valor que ele quer investir.
    let amountGamble = this.prompt("How much do you want to invest?");
    let nAmountGamble = Number(amountGamble); // Transformando a string em número.

    // Verificar se existe saldo suficiente.
    if(nAmountGamble > saldo){
        console.log("Invalid")
        throw new Error("Insufficient funds");
        
    } else {
         // Se sim, verifica se o investimento foi bem sucedido.
       if(this.successRating < 0.4){
          // Se não, atualiza o saldo com o investimento.
          this.control.db.setAcessBalance(saldo - nAmountGamble);
          console.log("Investiment failed!")
       }
       else
       {  
          // Se sim, atualiza o saldo com o investimento e o lucro.  
          this.control.db.setAcessBalance (saldo + (nAmountGamble * this.porcentagemLucro));
          console.log("Investiment was a success!")
           }

           // Valor pós o investimento ser concluido.
           console.log(this.control.db.getAcessBalance());
    }


}

}