import { IEntity } from "../interface/IEntity";

export class GenericController<T> implements IEntity<T> {
    getType(param: T): T {
        return param
    }
}