"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const Operations_1 = __importDefault(require("../model/Operations"));
const MainScreen_1 = __importDefault(require("../view/MainScreen"));
const GenericController_1 = require("./GenericController");
class MainController {
    constructor() {
        this.db = new Database_1.default();
        this.operations = new Operations_1.default(this);
        this.genericController = new GenericController_1.GenericController;
        new MainScreen_1.default(this); //Estou passando um parametro que é p próprio MainCotroller para o control do MainScreen.
    }
}
exports.default = MainController;
