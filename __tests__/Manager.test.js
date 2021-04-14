const Manager = require('../lib/Manager');

describe("tests if sub class exists", () => {
    it('should be an object', () => {
        //arrange
        //act
        const managerObject = new Manager(); 
        //assert 
        expect(typeof(managerObject)).toBe('object');
    })
    it('should take in a name', () => {
        const name = "jules"
        const managerObject = new Manager("jules");
        expect(managerObject.name).toBe(name);
    })
    it('should take in an id', () => {
        const id = 1
        const managerObject = new Manager("jules",1);
        expect(managerObject.id).toBe(id);
    })
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const managerObject = new Manager("jules", 1,"jules@gmail.com");
        expect(managerObject.email).toBe(email);
    })
    it('should take in an office number', () => {
        const number = "1234567891"
        const managerObject = new Manager("jules", 1,"jules@gmail.com","1234567891");
        expect(managerObject.officeNumber).toBe(number);
    })
})