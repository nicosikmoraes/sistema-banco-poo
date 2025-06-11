import PromptSync from "prompt-sync";
import MainController from "../../controller/MainController";
import InvestAbstract from "../../model/abstract_class/InvestAbstract";
export default class RiskInvestiment extends InvestAbstract {
    private control: MainController;
    public prompt = PromptSync();

constructor(porcentagemLucro: number, successRating: number,control: MainController){
    super(porcentagemLucro, successRating);
    this.control = control;
}

investiment(): void {

    // Gera uma valor aleatório para a porcentagem de lucro. ("Rendimento")
    let porcentagemValor = Math.random();
    // Transforma o valor em número com uma casa decimal.
    this.porcentagemLucro = Number(porcentagemValor.toFixed(1));

    // Gera um valor aleatório para a taxa de sucesso do investimento.
    this.successRating = Math.random();

    // Pega o saldo atual do usuário.
    let saldo: number = this.control.db.getAcessBalance();


    // Pergunta ao usuário quanto ele deseja investir.
    let amountGamble = this.prompt("Digite quantidade que deseja apostar:");
    let nAmountGamble = Number(amountGamble); // Transforma a string em número.

    // Verificar se existe saldo suficiente.
    if(nAmountGamble > saldo){
        // Se o valor apostado for maior que o saldo, lança um erro.
        console.log("Insufficient funds");

    let amountGamble = this.prompt("How much do you want to invest?");
    let nAmountGamble = Number(amountGamble);

    // Verificar se existe saldo suficiente.
    if(nAmountGamble > saldo){
        console.log("Invalid");

        throw new Error("Insufficient funds");
    }else{

         // Verifica se o investimento foi bem sucedido ou não, com base na taxa de sucesso.
       if(this.successRating < 0.65){
        // Se a taxa de sucesso for menor que 0.65, o investimento falha. E o usuário perde o valor apostado.
          this.control.db.setAcessBalance(saldo - nAmountGamble);

          console.log("Investimento mal sucedido!")
       }
       else
       {
            // Se a taxa de sucesso for maior ou igual a 0.65, o investimento é bem sucedido.
          this.control.db.setAcessBalance (saldo + (nAmountGamble * (this.porcentagemLucro + 0.5)));
          console.log("Investiment was a success!")
           }
           
           // Valor pós o investimento ser concluido.
           console.log(this.control.db.getAcessBalance());
    }


 }
}
}
