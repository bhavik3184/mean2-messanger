import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from "./auth.service";
import {Router} from '@angular/router';
import {User} from "./user.model";

@Component({
	selector: 'app-signin'
	, template: require('./sigin.component.html')
})
export class SigninComponent implements OnInit {
	myForm:FormGroup;

	constructor(private authService:AuthService, private router:Router) {
	}

	onSubmit() {
		const user = new User(this.myForm.value.password, this.myForm.value.email);
		this.authService.SignIn(user)
			.subscribe(
				data=> {
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.userId);
					this.router.navigateByUrl('/');
				}, error=> console.error(error)
			);
		this.myForm.reset();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			email: new FormControl(null, Validators.required)
			, password: new FormControl(null, Validators.required)
		});
	}

}