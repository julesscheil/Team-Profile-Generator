// create main class employee for subclass to inherit properties
class Employee {
    // create main constructor and properties
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //get employee name
    getName() {
        return this.name;
    }
    // get employee id
    getID() {
        return this.id;
    }

    // get employee email
    getEmail() {
        return this.email;
    }

    // get employee role, fill in individual subclasses
    getRole() {
        return 'Employee';
    }
}

//export employee main class
module.exports = Employee;