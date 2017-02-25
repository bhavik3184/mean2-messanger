import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from "./app.component";
import {MessageComponent} from "./messages/message.component";
import {MessageListComponent} from "./messages/message-list.component";
import {MessageInputComponent} from "./messages/message-input.component";
import {MessagesComponent} from "./messages/messages.component";
import {AuthenticationComponent} from "./auth/authentication.component";
import {HeaderComponent} from "./hearder.component";
import {routing} from "./app.routing";
import {LogoutComponent} from "./auth/logout.component";
import {SignupComponent} from "./auth/signup.component";
import {SigninComponent} from "./auth/signin.component";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {ErrorComponent} from "./error/error.component";
import {ErrorService} from "./error/error.service";

@NgModule({
	declarations: [
		AppComponent
		, MessageComponent
		, MessageListComponent
		, MessageInputComponent
		, MessagesComponent
		, AuthenticationComponent
		, HeaderComponent
		, LogoutComponent
		, SignupComponent
		, SigninComponent
		,ErrorComponent
	],
	providers: [AuthService,ErrorService],
	imports: [BrowserModule, FormsModule, routing, ReactiveFormsModule, HttpModule],
	bootstrap: [AppComponent]
})
export class AppModule {

}