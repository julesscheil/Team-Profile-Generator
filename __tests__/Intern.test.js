const Intern = require('../lib/Intern');

describe("tests if sub class exists", () => {
    it('should be an object', () => {
        //arrange
        //act
        const internObject = new Intern(); 
        //assert 
        expect(typeof(internObject)).toBe('object');
    })
    it('should take in a name', () => {
        const name = "jules"
        const internObject = new Intern("jules");
        expect(internObject.name).toBe(name);
    })
    it('should take in an id', () => {
        const id = 1
        const internObject = new Intern("jules",1);
        expect(internObject.id).toBe(id);
    })
    it('should take in an email', () => {
        const email = "jules@gmail.com"
        const internObject = new Intern("jules", 1,"jules@gmail.com");
        expect(internObject.email).toBe(email);
    })
    it('should take in a GitHub username', () => {
        const school = "UGA"
        const internObject = new Intern("jules", 1,"jules@gmail.com","UGA");
        expect(internObject.school).toBe(school);
    })
})