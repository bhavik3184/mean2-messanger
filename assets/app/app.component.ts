import { Component } from '@angular/core';
import { Message } from '../app/messages/message.model'

@Component({
	selector: 'my-app',
	template: require('./app.component.html')
})
export class AppComponent {
	message = new Message('A Message', 'SB');
}