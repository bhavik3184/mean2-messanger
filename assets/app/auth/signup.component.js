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
var forms_1 = require('@angular/forms');
var SignupComponent = (function () {
    function SignupComponent() {
    }
    SignupComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
        this.myForm.reset();
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = new forms_1.FormGroup({
            firstName: new forms_1.FormControl(null, forms_1.Validators.required),
            lastName: new forms_1.FormControl(null, forms_1.Validators.required),
            email: new forms_1.FormControl(null, forms_1.Validators.required),
            password: new forms_1.FormControl(null, forms_1.Validators.required)
        });
    };
    SignupComponent = __decorate([
        core_1.Component({
            selector: 'app-signup',
            template: require('./signup.component.html')
        }), 
        __metadata('design:paramtypes', [])
    ], SignupComponent);
    return SignupComponent;
})();
exports.SignupComponent = SignupComponent;