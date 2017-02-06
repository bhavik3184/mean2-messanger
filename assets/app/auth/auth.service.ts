import {Injectable} from "@angular/core";
import {Http, Headers,Response} from "@angular/http";
import 'rxjs/Rx';

import {User} from "./user.model";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {
	constructor(private http:Http) {

	}

	SignUp(user:User) {
		var body = JSON.stringify(user);
		var headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://localhost:3000/user', body, {headers: headers})
			.map((response:Response)=> response.json())
			.catch((error:Response)=> Observable.throw(error.json()));
	};

	SignIn(user:User) {
		var body = JSON.stringify(user);
		var headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
			.map((response:Response)=> response.json())
			.catch((error:Response)=> Observable.throw(error.json()));
	};

	isLoggedIn() {
		return (localStorage.getItem('token') == null)
	}

	logOut() {
		localStorage.clear();
	}
}