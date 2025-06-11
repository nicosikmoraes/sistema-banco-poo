import { IEntity } from "../interface/IEntity";
import Conta from "../model/Conta";
import User from "../model/User";

export class GenericController<T> implements IEntity<T> {
    getType(param: T): T {
        return param
    }

    // Retorna um novo User ou uma nova Conta.
    public getNew(param: T): any{
        if(this.getType(param) === "User"){
            return new User();  
        } 
        
        if(this.getType(param) === "Conta"){
            return new Conta();
        }
    
}
}