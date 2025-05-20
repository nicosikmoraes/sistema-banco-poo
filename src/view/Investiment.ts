import MainController from "../controller/MainController";
import InvestAbstract from "../model/InvestAbstract";

export default class Investiment extends InvestAbstract {
    private control: MainController;


constructor(porcentagemLucro: number, successRating: number,control: MainController){
    super(porcentagemLucro, successRating);
    this.control = control;
}

investiment(): void {

    this.porcentagemLucro = Math.random();
    this.successRating = Math.random();

    if(this.successRating < 0.5){
        this.control.db.setAcessBalance(0)
    }else{
    this.control.db.setAcessBalance(
        this.control.db.getAcessBalance() + (this.control.db.getAcessBalance()*this.porcentagemLucro));
  }
}

}