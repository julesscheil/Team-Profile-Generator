// require intern sub class file
const Intern = require('../lib/Intern');

describe("tests if sub class exists", () => {
    // test its an object
    it('should be an object', () => {
        //arrange
        //act
        const internObject = new Intern();
        //assert 
        expect(typeof (internObject)).toBe('object');
    })
    //test it takes in a name
    it('should take in a name', () => {
        const name = "jules"
        const internObject = new Intern("jules");
        expect(internObject.name).toBe(name);
    })
    // test it takes in an id
    it('should take in an id', () => {
        const id = 1
        const internObject = new Intern("jules", 1);
        expect(internObject.id).toBe(id);
    })
    // test it takes in an email
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const internObject = new Intern("jules", 1, "jules@gmail.com");
        expect(internObject.email).toBe(email);
    })
    //test it takes in a school name
    it('should take in a school name', () => {
        const school = "UGA"
        const internObject = new Intern("jules", 1, "jules@gmail.com", "UGA");
        expect(internObject.school).toBe(school);
    })
})