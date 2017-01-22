import {Component} from '@angular/core';
@Component({
	selector: 'app-message-input',
	template: require('./message-input.component.html')
})

export class MessageInputComponent {
	onSave(value:string) {
		console.log(value);
	}

}