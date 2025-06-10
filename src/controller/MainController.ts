import Database from "../db/Database";
import Conta from "../model/Conta";
import Operations from "../model/Operations";
import User from "../model/User";
import MainScreen from "../view/MainScreen";
import { GenericController } from "./GenericController";


export default class MainController {
    public db: Database = new Database();
    public operations: Operations = new Operations(this);
    public genericController: GenericController<any> = new GenericController;

    constructor(){
        new MainScreen(this);   //Estou passando um parametro que é p próprio MainCotroller para o control do MainScreen.
    }

}

