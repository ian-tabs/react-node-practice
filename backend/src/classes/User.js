class User {
    constructor(props) {
        const { id, firstName, lastName } = props
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

module.exports = User;