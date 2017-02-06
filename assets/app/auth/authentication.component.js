var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var auth_service_1 = require("./auth.service");
var AuthenticationComponent = (function () {
    function AuthenticationComponent(authService) {
        this.authService = authService;
    }
    AuthenticationComponent.prototype.isLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    AuthenticationComponent = __decorate([
        core_1.Component({
            selector: 'app-authentication',
            template: "\n\t\t<header class=\"row spacing\">\n\t\t    <nav class=\"col-md-8 col-md-offset-2\">\n\t\t        <ul class=\"nav nav-tabs\">\n\t\t            <li routerLinkActive=\"active\"><a [routerLink]=\"['signup']\">SignUp</a></li>\n\t\t            <li routerLinkActive=\"active\"><a [routerLink]=\"['sigin']\" *ngIf=\"!isLoggedIn()\">SignIn</a></li>\n\t\t            <li routerLinkActive=\"active\"><a [routerLink]=\"['logout']\" *ngIf=\"isLoggedIn()\">Logout</a></li>\n\t\t        </ul>\n\t\t    </nav>\n\t\t</header>\n\t\t<div class=\"row spacing\">\n\t\t    <router-outlet></router-outlet>\n\t\t</div>\n\t"
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], AuthenticationComponent);
    return AuthenticationComponent;
})();
exports.AuthenticationComponent = AuthenticationComponent;
