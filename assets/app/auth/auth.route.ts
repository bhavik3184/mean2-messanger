import {Routes} from '@angular/router';
import {SignupComponent} from "./signup.component";
import {SigninComponent} from "./signin.component";
import {LogoutComponent} from "./logout.component";

export const AUTH_ROUTE:Routes = [
	{path: '', redirectTo: 'signup', pathMatch: 'full'}
	, {path: 'signup', component: SignupComponent}
	, {path: 'sigin', component: SigninComponent}
	, {path: 'logout', component: LogoutComponent}
];