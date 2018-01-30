import { Component } from '@angular/core';
import {Message} from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    messages: Message[] = [
        new Message('Some message', 'San'),
        new Message('Some message2', 'jay'),
        new Message('Some message3', 'var')
    ];
}