export interface IEntity<T> {
    getType(param: T): T;
}