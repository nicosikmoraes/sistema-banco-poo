import { IMessageEnd } from "../../interface/IMessage";

export default class Message implements IMessageEnd {
    
    //Método para mostrar a mensagem de sucesso da transferência.
    completedMessage2(nomeBanco: string): void {
        console.log("Done, Send to", nomeBanco );
    }

}