"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Message_1 = __importDefault(require("../model/Message"));
const tsyringe_1 = require("tsyringe");
const MainController_1 = __importDefault(require("./MainController"));
const TranfOtherBank_1 = __importDefault(require("../view/TranfOtherBank"));
tsyringe_1.container.register('Mensagem', { useClass: Message_1.default });
tsyringe_1.container.register(MainController_1.default, { useClass: MainController_1.default });
const transf = tsyringe_1.container.resolve(TranfOtherBank_1.default);
transf.transferenceMoney();
