var core_1 = require('@angular/core');
var error_model_1 = require('./error.model');
var ErrorService = (function () {
    function ErrorService() {
        this.errorOccoured = new core_1.EventEmitter();
    }
    ErrorService.prototype.handleError = function (error) {
        var errorData = new error_model_1.Error(error.title, error.error.message);
        this.errorOccoured.emit(errorData);
    };
    return ErrorService;
})();
exports.ErrorService = ErrorService;
