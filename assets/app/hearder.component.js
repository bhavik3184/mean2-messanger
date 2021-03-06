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
var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            template: "\n\t\t\t\t<header class=\"row\">\n\t\t\t\t    <nav class=\"col-md-8 col-md-offset-8\">\n\t\t\t\t        <ul class=\"nav nav-pills\">\n\t\t\t\t            <li routerLinkActive=\"active\"><a [routerLink]=\"['/messages']\">Messanger</a></li>\n\t\t\t\t            <li routerLinkActive=\"active\"><a [routerLink]=\"['/auth']\">Authentication</a></li>\n\t\t\t\t        </ul>\n\t\t\t\t    </nav>\n\t\t\t\t</header>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
})();
exports.HeaderComponent = HeaderComponent;
