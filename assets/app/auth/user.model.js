var User = (function () {
    function User(password, email, firstname, lastname) {
        this.password = password;
        this.email = email;
        this.firstname = firstname;
        this.lastname = lastname;
    }
    return User;
})();
exports.User = User;
