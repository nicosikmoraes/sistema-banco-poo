import Database from "../db/Database";
import Conta from "../model/Conta";
import Operations from "../model/Operations";
import User from "../model/User";
import MainScreen from "../view/MainScreen";

export default class MainController {
    public db: Database = new Database();
    public operations: Operations = new Operations(this);

    constructor(){
        new MainScreen(this);   //Estou passando um parametro que é p próprio MainCotroller para o control do MainScreen.
    }

    public getNewUser(): User{
            //Retorna nessa função tudo que tem no User.ts
            return new User();     //Meio que criando um user com o new.
    }

    public getNewAccount(): Conta{
            return new Conta();
    }
}