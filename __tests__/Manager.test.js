// require manager subclass file
const Manager = require('../lib/Manager');

describe("tests if sub class exists", () => {
    // test it comes in as an object
    it('should be an object', () => {
        //arrange
        //act
        const managerObject = new Manager();
        //assert 
        expect(typeof (managerObject)).toBe('object');
    })
    // test it takes in a name
    it('should take in a name', () => {
        const name = "jules"
        const managerObject = new Manager("jules");
        expect(managerObject.name).toBe(name);
    })
    //test it takes in an id
    it('should take in an id', () => {
        const id = 1
        const managerObject = new Manager("jules", 1);
        expect(managerObject.id).toBe(id);
    })
    //test it takes in an email
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const managerObject = new Manager("jules", 1, "jules@gmail.com");
        expect(managerObject.email).toBe(email);
    })
    // test it takes in an office number
    it('should take in an office number', () => {
        const number = "1234567891"
        const managerObject = new Manager("jules", 1, "jules@gmail.com", "1234567891");
        expect(managerObject.officeNumber).toBe(number);
    })
})