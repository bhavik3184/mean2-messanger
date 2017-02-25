import {Injectable} from "@angular/core";
import {Http, Headers,Response} from "@angular/http";
import 'rxjs/Rx';

import {User} from "./user.model";
import {Observable} from "rxjs";
import {ErrorService} from "../error/error.service";

@Injectable()
export class AuthService {
	constructor(private http:Http,private errorService:ErrorService) {

	}

	SignUp(user:User) {
		var body = JSON.stringify(user);
		var headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://localhost:3000/user', body, {headers: headers})
			.map((response:Response)=> response.json())
			.catch((error:Response)=> {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json())
			});
	};

	SignIn(user:User) {
		var body = JSON.stringify(user);
		var headers = new Headers({'Content-Type': 'application/json'});

		return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
			.map((response:Response)=> response.json())
			.catch((error:Response)=> {
				this.errorService.handleError(error.json());
				return Observable.throw(error.json())
			});
	};

	isLoggedIn() {
		return localStorage.getItem('token') !== null;
	}

	logOut() {
		localStorage.clear();
	}
}