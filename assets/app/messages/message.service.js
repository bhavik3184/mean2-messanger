var MessageService = (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.getMessages = function () {
        return this.messages;
    };
    MessageService.prototype.addMessages = function (message) {
        this.messages.push(message);
        console.log(this.messages);
    };
    MessageService.prototype.deleteMessages = function (message) {
        this.messages.splice(this.messages.indexOf(message), 1);
    };
    return MessageService;
})();
exports.MessageService = MessageService;
