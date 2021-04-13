// require Employee file
const Employee = require('./Employee');

// create engineer constructor extending employee
class Engineer extends Employee {
    constructor(name, id, email, gitHub) {
        // super employee class
        super(name, id, email);
        this.gitHub = gitHub;
    }
// add get github
    getGitHub() {
        return this.gitHub;
    }
// set role to engineer
    getRole() {
        return "Engineer";
    }
}

// export engineer
module.exports = Engineer;