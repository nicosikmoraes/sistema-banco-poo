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

    let porcentagemValor = Math.random();
    this.porcentagemLucro = Number(porcentagemValor.toFixed(1));

    this.successRating = Math.random();
    let saldo: number = this.control.db.getAcessBalance();

    let amountGamble = this.prompt("Digite quantidade que deseja apostar:");
    let nAmountGamble = Number(amountGamble);

    // Verificar se existe saldo suficiente.
    if(nAmountGamble > saldo){
        console.log("Valor inválido");
        throw new Error("Insufficient funds");
    }else{

       if(this.successRating < 0.65){
          this.control.db.setAcessBalance(saldo - nAmountGamble);
          console.log("Investimento mal sucedido!")
       }else{
          this.control.db.setAcessBalance (saldo + (nAmountGamble * (this.porcentagemLucro + 0.5)));
          console.log("Investimento bem sucedido!")
           }
           // Valor pós o investimento ser concluido.
           console.log(this.control.db.getAcessBalance());
    }


 }
}
