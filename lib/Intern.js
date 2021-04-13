// import employee main class
const Employee = require('./Employee');

// create intern subclass extending employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        // super employees properties
        super(name, id, email);
        this.school = school;
    }

    // get school info
    getSchool() {
        return this.school;
    }

    // set role to intern
    getRole() {
        return "Intern";
    }
}

// export intern
module.exports = Intern;