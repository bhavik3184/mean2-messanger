import {Message} from "./message.model";
import {Http,Response,Headers} from "@angular/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";


@Injectable()
export class MessageService {
	private messages:Message[] = [];

	constructor(private http:Http) {
	}

	getMessages() {
		return this.messages;
	}

	addMessage(message:Message) {
		this.messages.push(message);
		const body = JSON.stringify(message);
		const headers = new Headers({'Content-Type': 'application/json'});
		return this.http.post('http://localhost:3000/message', body, {headers: headers})
			.map((response:Response)=>response.json())
			.catch((error:Response)=> Observable.throw(error.json()));
	}

	deleteMessage(message:Message) {
		this.messages.splice(this.messages.indexOf(message), 1);
	}
}