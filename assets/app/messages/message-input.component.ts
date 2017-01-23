import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {MessageService} from "./message.service";
import {Message} from "./message.model";
@Component({
	selector: 'app-message-input',
	template: require('./message-input.component.html')
})

export class MessageInputComponent {
	constructor(private messageService:MessageService) {

	}

	onSubmit(form:NgForm) {
		const message = new Message(form.value.content, 'SB');
		this.messageService.addMessage(message);

		form.resetForm();
	}

}