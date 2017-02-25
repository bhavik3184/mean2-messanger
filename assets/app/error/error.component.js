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
var error_service_1 = require("./error.service");
var ErrorComponent = (function () {
    function ErrorComponent(errorService) {
        this.errorService = errorService;
        this.display = 'none';
    }
    ErrorComponent.prototype.onErrorHandled = function () {
        this.display = "none";
    };
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.errorService.errorOccoured.subscribe(function (error) {
            _this.error = error;
            _this.display = 'block';
        });
    };
    ErrorComponent = __decorate([
        core_1.Component({
            selector: 'app-error',
            template: require('./error.component.html'),
            styles: ["\n\t\t.backdrop{\n\t\t\tbackground-color:rgba(0,0,0,0.6);\n\t\t\tposition:fixed;\n\t\t\ttop:0;\n\t\t\tleft:0;\n\t\t\twidth:100%;\n\t\t\theight:100vh;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [error_service_1.ErrorService])
    ], ErrorComponent);
    return ErrorComponent;
})();
exports.ErrorComponent = ErrorComponent;
