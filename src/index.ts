import MainController from "./controller/MainController";

try {
    new MainController();
} catch (error: any) {
    console.log("Erro: " +error)    
}