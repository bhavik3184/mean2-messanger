import {Message} from "./message.model";
export class MessageService {
	private messages:Message[] = [];

	getMessages() {
		return this.messages;
	}

	addMessages(message:Message) {
		this.messages.push(message);
	}

	deleteMessages(message:Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}