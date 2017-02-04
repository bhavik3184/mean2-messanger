var User = (function () {
    function User(password, email, firstName, lastName) {
        this.password = password;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return User;
})();
exports.User = User;
