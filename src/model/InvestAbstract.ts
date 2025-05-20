export default abstract class InvestAbstract {
    protected porcentagemLucro: number;
    protected successRating: number;    

    constructor(porcentagemLucro: number, successRating: number){
        this.porcentagemLucro = porcentagemLucro;
        this.successRating = successRating;
    }

    abstract investiment(): void;
}