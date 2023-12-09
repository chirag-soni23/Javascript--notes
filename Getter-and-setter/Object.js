const user = {
    _email: "csoni0692@gmail.com",
    _password: "abc",

    get email() {
        return this._email.toUpperCase()
    },
    set email(value) {
        this._email = value
    },
    get password() {
        return this._password.toUpperCase()
    },
    set email(value) {
        this._password = value
    }
}
const tea = Object.create(user)
console.log(tea.email);
console.log(tea.password);