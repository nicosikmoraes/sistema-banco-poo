"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericController = void 0;
const Conta_1 = __importDefault(require("../model/Conta"));
const User_1 = __importDefault(require("../model/User"));
class GenericController {
    getType(param) {
        return param;
    }
    // Retorna um novo User ou uma nova Conta.
    getNew(param) {
        if (this.getType(param) === "User") {
            return new User_1.default();
        }
        if (this.getType(param) === "Conta") {
            return new Conta_1.default();
        }
    }
}
exports.GenericController = GenericController;
