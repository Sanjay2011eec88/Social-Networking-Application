import {Message} from "./message.model";

export class MessageService {
    messages: Message[] = [];

    addMessage(message: Message) {
        this.messages.push(this.message);
    }

    getMessage(){
        return this.messages;
    }

    deleteMessage(message: Message){
        this.messages.splice(this.messages.indexOf(message),1);
    }
}
