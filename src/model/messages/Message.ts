import { IMessageEnd } from "../../interface/IMessage";

export default class Message implements IMessageEnd {
    completedMessage2(nomeBanco: string): void {
        console.log("Done, Send to", nomeBanco );
    }

}