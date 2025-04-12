"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const User_1 = __importDefault(require("../model/User"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
class MainController {
    constructor() {
        this.db = new Database_1.default();
        new MainScreen_1.default(this); //Estou passando um parametro que é p próprio MainCotroller para o control do MainScreen.
    }
    getNewUser() {
        //Retorna nessa função tudo que tem no User.ts
        return new User_1.default(); //Meio que criando um user com o new.
    }
}
exports.default = MainController;
