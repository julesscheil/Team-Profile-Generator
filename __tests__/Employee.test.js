const Employee =require('../lib/Employee');

describe("tests if class exists", () => {
    it('should be an object', () => {
        //arrange
        //act
        const employeeObject = new Employee(); 
        //assert 
        expect(typeof(employeeObject)).toBe('object');
    })
    it('should take in a name', () => {
        const name = "jules"
        const employeeObject = new Employee("jules");
        expect(employeeObject.name).toBe(name);
    })
    it('should take in an id', () => {
        const id = 1
        const employeeObject = new Employee("jules",1);
        expect(employeeObject.id).toBe(id);
    })
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const employeeObject = new Employee("jules", 1,"jules@gmail.com");
        expect(employeeObject.email).toBe(email);
    })
})