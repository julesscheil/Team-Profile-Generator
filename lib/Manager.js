// import employee main class
const Employee = require('./Employee');

// create manager subclass to extend employee
class Manager extends Employee {
    // create new constructor for manager
    constructor(name, id, email, officeNumber) {
        // super manager's properties to subclass
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // set employee role to manager
    getRole() {
        return "Manager";
    }

    // get office number
    getOfficeNumber() {
        return this.officeNumber;
    }
}

// export manager subclass
module.exports = Manager;