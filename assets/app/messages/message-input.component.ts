import {Component} from '@angular/core';
import {MessageService} from "./message.service";
import {Message} from "./message.model";
@Component({
	selector: 'app-message-input',
	template: require('./message-input.component.html')
})

export class MessageInputComponent {
	constructor(private messageService:MessageService) {

	}

	onSave(value:string) {
		const message = new Message(value, 'SB');
		this.messageService.addMessage(message);
	}

}