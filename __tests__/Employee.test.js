// require employee class file
const Employee = require('../lib/Employee');

// first test that employee object exists
describe("tests if class exists", () => {
    //test that its an object
    it('should be an object', () => {
        //arrange
        //act
        const employeeObject = new Employee();
        //assert 
        expect(typeof (employeeObject)).toBe('object');
    })
    // test that a name is taken in
    it('should take in a name', () => {
        const name = "jules"
        const employeeObject = new Employee("jules");
        expect(employeeObject.name).toBe(name);
    })
    // test an id is taken in
    it('should take in an id', () => {
        const id = 1
        const employeeObject = new Employee("jules", 1);
        expect(employeeObject.id).toBe(id);
    })
    // test an email is taken in
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const employeeObject = new Employee("jules", 1, "jules@gmail.com");
        expect(employeeObject.email).toBe(email);
    })
})