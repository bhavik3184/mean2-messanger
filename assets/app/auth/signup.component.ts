import {Component,OnInit} from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {AuthService} from "./auth.service";
import {User} from "./user.model";

@Component({
	selector: 'app-signup'
	, template: require('./signup.component.html')
})
export class SignupComponent implements OnInit {
	myForm:FormGroup;

	constructor(private authService:AuthService) {
	}

	onSubmit() {
		var user = new User(this.myForm.value.password, this.myForm.value.email, this.myForm.value.firstName, this.myForm.value.lastName);

		this.authService.SignUp(user)
			.subscribe(
				data => console.log(data)
				, error=> console.error(error)
			);

		this.myForm.reset();
	}

	ngOnInit() {
		this.myForm = new FormGroup({
			firstName: new FormControl(null, Validators.required)
			, lastName: new FormControl(null, Validators.required)
			, email: new FormControl(null, Validators.required)
			, password: new FormControl(null, Validators.required)
		});
	}

}